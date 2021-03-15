import { Command } from "@colyseus/command";
import { GameRoomState } from "../GameRoomState";

export class StartGameCommand extends Command<GameRoomState, {sessionId: string}> {

  validate({sessionId} = this.payload){
    return this.state.owner == sessionId
  }

  execute() {
    this.state.gameRunning = true;
  }

}