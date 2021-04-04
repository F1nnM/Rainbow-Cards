import { Dispatcher } from "@colyseus/command";
import { Room, Client, Delayed } from "colyseus";
import { CzarVoteCommand } from "./commands/CzarVoteCommand";
import { JoinGameCommand } from "./commands/JoinGameCommand";
import { NewOwnerCommand } from "./commands/NewOwnerCommand";
import { NewRoundCommand } from "./commands/NewRoundCommand";
import { PlayCardCommand } from "./commands/PlayCardCommand";
import { ReplaceHandCommand } from "./commands/ReplaceHandCommand";
import { StartGameCommand } from "./commands/StartGameCommand";
import { SkipRoundCommand } from "./commands/SkipRoundCommand";
import { GameRoomState } from "./GameRoomState";
import { ReconnectPlayerCommand } from "./commands/ReconnectPlayerCommand";
import { FinishRoundCommand } from "./commands/FinishRoundCommand";

export class GameRoom extends Room<GameRoomState> {

  dispatcher: Dispatcher ;

  noCreatorReturnClose: Delayed;

  onCreate (options: any) {
    this.setState(new GameRoomState());

    this.setPrivate(options.private);
    this.maxClients = Math.min(options.maxPlayers,50);
    this.state.sets = options.sets;
    this.state.pointsToWin = options.pointsNeeded;

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
      this.dispatcher.dispatch(new CzarVoteCommand(), {sessionId: client.sessionId, index: message.index})
    })

    this.onMessage("replaceHand", (client, message) => {
      this.dispatcher.dispatch(new ReplaceHandCommand(), {sessionId: client.sessionId})
    })

    this.onMessage("skipRound", (client, message) => {
      this.dispatcher.dispatch(new SkipRoundCommand(), {force: false, sessionId: client.sessionId})
    })

  }

  onJoin (client: Client, options: any) {
    this.dispatcher.dispatch(new JoinGameCommand(), {sessionId: client.sessionId, name: options.name})
  }

  async onLeave (client: Client, consented: boolean) {
    let player = this.state.players.get(client.sessionId);
    player.connected = false;

    // if the owner left replace them after 10 seconds.
    let replaceOwnerTimeout;
    if (player.isOwner){
      console.log(client.sessionId + " was owner")
      replaceOwnerTimeout = this.clock.setTimeout(() => this.dispatcher.dispatch(new NewOwnerCommand(), {lastOwnerId: client.sessionId}), 15_000);
    }

    // if the czar left skip round after 30 seconds.
    let czarLeftTimeout;
    if (player.isCzar){
      console.log(client.sessionId + " was czar")
      czarLeftTimeout = this.clock.setTimeout(() => this.dispatcher.dispatch(new SkipRoundCommand(), {force: true, sessionId: null}), 15_000);
    }

    // if a player left, after 10 seconds try to finish the round.
    let continueRoundTimeout;
    if (!player.played && !player.isCzar){
      console.log(client.sessionId + " had to play")
      continueRoundTimeout = this.clock.setTimeout(() => {
        player.played = true;
        this.dispatcher.dispatch(new FinishRoundCommand(), {sessionId: client.sessionId});
      }, 15_000);
    }
        
    try{
      await this.allowReconnection(client, 60*5);
      if (replaceOwnerTimeout)
        replaceOwnerTimeout.clear()
      if (czarLeftTimeout)
        czarLeftTimeout.clear()
      if (continueRoundTimeout)
        continueRoundTimeout.clear()
      this.dispatcher.dispatch(new ReconnectPlayerCommand(), {sessionId: client.sessionId})
    } catch {
      player.left = true;
    }
  }

  onDispose() {
    this.dispatcher.stop();
  }

}
