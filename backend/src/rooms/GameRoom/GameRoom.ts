import { Dispatcher } from "@colyseus/command";
import { Room, Client, Delayed } from "colyseus";
import { CloseCommand } from "./commands/CloseCommand";
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

    this.state.private = options.private;
    this.setPrivate(true) // private until creator rejoined

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
      }, 2000);
    })

  }

  onJoin (client: Client, options: any) {
    if(!this.state.creatorLeft)
      return;
    if(!this.state.owner){
      // creator joined again
      this.state.owner = client.sessionId;
      this.autoDispose = true;
      this.setPrivate(this.state.private)
      this.noCreatorReturnClose.clear()
    }
    this.state.players.set(client.sessionId, new Player());
  }

  async onLeave (client: Client, consented: boolean) {
    if (this.state.creatorLeft){
      console.log(client.sessionId+" left")
      this.state.players.get(client.sessionId).connected = false;

      // if the owner left replace them after 10 seconds.
      let replaceOwnerTimeout;
      if (this.state.owner == client.sessionId){
        console.log(client.sessionId + " was owner, searching new")
        replaceOwnerTimeout = this.clock.setTimeout(() => {
          let newOwner;
          this.state.players.forEach((player) => {
            if(player.connected)
              newOwner = player.id
          })
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
        
      // if (consented) {
      //   this.state.players.get(client.sessionId).left = true;
      // }else{
        try{
          await this.allowReconnection(client, 60_000*5);
          if(replaceOwnerTimeout)
            replaceOwnerTimeout.clear() // owner returned, don't replace
          this.state.players.get(client.sessionId).connected = true;
        } catch {}
      //}
    }else{
      console.log("Creator left")
      this.state.creatorLeft = true;
      this.noCreatorReturnClose = this.clock.setTimeout(()=>this.disconnect, 60_000) //kill room if the creator doesn't return in a minute.
    }

  }

  onDispose() {
    this.dispatcher.stop();
  }

}
