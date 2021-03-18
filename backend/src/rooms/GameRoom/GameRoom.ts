import { Dispatcher } from "@colyseus/command";
import { Room, Client, Delayed } from "colyseus";
import { CzarVoteCommand } from "./commands/CzarVoteCommand";
import { NewRoundCommand } from "./commands/NewRoundCommand";
import { PlayCardCommand } from "./commands/PlayCardCommand";
import { StartGameCommand } from "./commands/StartGameCommand";
import { GameRoomState, Player } from "./GameRoomState";

export class GameRoom extends Room<GameRoomState> {

  dispatcher = new Dispatcher(this);

  noCreatorReturnClose: Delayed;

  onCreate (options: any) {
    this.autoDispose = false;
    this.setState(new GameRoomState());

    this.setPrivate(false)//options.private)

    this.clock.start()

    this.onMessage("startGame", (client, message) => {
      this.dispatcher.dispatch(new StartGameCommand(), {sessionId: client.sessionId})
      this.dispatcher.dispatch(new NewRoundCommand())
    });

    this.onMessage("playCard", (client, message) => {
      this.dispatcher.dispatch(new PlayCardCommand(), {sessionId: client.sessionId, index: message.index})
    });

    this.onMessage("czarVote", (client, message) => {
      this.dispatcher.dispatch(new CzarVoteCommand(), {sessionId: client.sessionId, index: message.index})
      this.clock.setTimeout(() => {
        this.dispatcher.dispatch(new NewRoundCommand())
      }, 5000);
    })

  }

  onJoin (client: Client, options: any) {
    if(!this.state.owner)
      this.state.owner = client.sessionId;
    let player = new Player();
    player.id = client.sessionId;
    this.state.players.set(client.sessionId, player);
  }

  async onLeave (client: Client, consented: boolean) {
    this.state.players.get(client.sessionId).connected = false;

    // if the owner left replace them after 10 seconds.
    let replaceOwnerTimeout;
    if (this.state.owner == client.sessionId){
      console.log(client.sessionId + " was owner")
      replaceOwnerTimeout = this.clock.setTimeout(() => {
        if(this.state.players.get(client.sessionId).connected) // owner returned
          return;
        console.log("didn't return, searching new")
        let newOwner: string;
        this.state.players.forEach((player, id) => {
          console.log(id +" : "+ player.connected)
          if(player.connected)
            newOwner = id
        })
        console.log(newOwner)
        if (newOwner){
          console.log("found new owner: "+newOwner)
          this.state.owner = newOwner
        }
        else{
          console.log("no new owner found, disconnecting all")
          this.disconnect()
        }
      }, 10_000);
    }
        
    try{
      await this.allowReconnection(client, 60_000*5);
      this.state.players.get(client.sessionId).connected = true;
    } catch {
      this.state.players.get(client.sessionId).left = true;
    }
  }

  onDispose() {
    this.dispatcher.stop();
  }

}
