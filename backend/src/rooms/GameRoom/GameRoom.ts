import { Dispatcher } from "@colyseus/command";
import { Room, Client, Delayed } from "colyseus";
import { CzarVoteCommand } from "./commands/CzarVoteCommand";
import { JoinGameCommand } from "./commands/JoinGameCommand";
import { NewOwnerCommand } from "./commands/NewOwnerCommand";
import { NewRoundCommand } from "./commands/NewRoundCommand";
import { PlayCardCommand } from "./commands/PlayCardCommand";
import { StartGameCommand } from "./commands/StartGameCommand";
import { GameRoomState, Player } from "./GameRoomState";

export class GameRoom extends Room<GameRoomState> {

  dispatcher: Dispatcher ;

  noCreatorReturnClose: Delayed;

  onCreate (options: any) {
    this.setState(new GameRoomState());

    this.setPrivate(options.private);
    this.maxClients = Math.min(options.maxPlayers,50);
    this.state.sets = options.sets;
    this.state.pointsToWin = options.pointsNeeded;

    this.state.initStacks();

    this.clock.start()

    this.dispatcher = new Dispatcher(this);

    this.onMessage("startGame", (client, message) => {
      this.dispatcher.dispatch(new StartGameCommand(), {sessionId: client.sessionId})
      this.dispatcher.dispatch(new NewRoundCommand(), {wait: 0})
    });

    this.onMessage("playCard", (client, message) => {
      this.dispatcher.dispatch(new PlayCardCommand(), {sessionId: client.sessionId, index: message.index})
    });

    this.onMessage("czarVote", (client, message) => {
      let czarVotePromise = this.dispatcher.dispatch(new CzarVoteCommand(), {sessionId: client.sessionId, index: message.index})
    })

  }

  onJoin (client: Client, options: any) {
    this.dispatcher.dispatch(new JoinGameCommand(), {sessionId: client.sessionId, name: options.name})
  }

  async onLeave (client: Client, consented: boolean) {
    this.state.players.get(client.sessionId).connected = false;

    // if the owner left replace them after 10 seconds.
    let replaceOwnerTimeout;
    if (this.state.players.get(client.sessionId).isOwner){
      console.log(client.sessionId + " was owner")
      replaceOwnerTimeout = this.clock.setTimeout(() => this.dispatcher.dispatch(new NewOwnerCommand(), {lastOwnerId: client.sessionId}), 10_000);
    }
        
    try{
      await this.allowReconnection(client, 60*0.5);
      if (replaceOwnerTimeout)
        replaceOwnerTimeout.clear()
      this.state.players.get(client.sessionId).connected = true;
    } catch {
      this.state.players.get(client.sessionId).left = true;
    }
  }

  onDispose() {
    this.dispatcher.stop();
  }

}
