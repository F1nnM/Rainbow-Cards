import { Dispatcher } from "@colyseus/command";
import { Room, Client } from "colyseus";
import { CzarVoteCommand } from "./commands/CzarVoteCommand";
import { NewRoundCommand } from "./commands/NewRoundCommand";
import { PlayCardCommand } from "./commands/PlayCardCommand";
import { StartGameCommand } from "./commands/StartGameCommand";
import { GameRoomState, Player } from "./GameRoomState";

export class GameRoom extends Room<GameRoomState> {

  dispatcher = new Dispatcher(this);

  onCreate (options: any) {
    this.setState(new GameRoomState());

    this.setPrivate(options.private)

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
    this.state.players.set(client.sessionId, new Player());
  }

  async onLeave (client: Client, consented: boolean) {
    this.state.players.get(client.sessionId).connected = false;

    try {
      if (consented) {
          throw new Error("consented leave");
      }

      await this.allowReconnection(client);

      this.state.players.get(client.sessionId).connected = true;

    } catch (e) {
      this.state.players.delete(client.sessionId);
    }
  }

  onDispose() {
    this.dispatcher.stop();
  }

}
