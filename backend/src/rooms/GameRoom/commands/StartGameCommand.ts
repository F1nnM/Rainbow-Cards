import { Command } from "@colyseus/command";
import { GameRoomState } from "../GameRoomState";

export class StartGameCommand extends Command<GameRoomState, {sessionId: string}> {

  validate({sessionId} = this.payload){
    return !this.state.gameRunning && !this.state.winner && this.state.owner == sessionId && this.state.players.size > 1
  }

  execute() {
    this.state.gameRunning = true;
  }

}