import { Command } from "@colyseus/command";
import { GameRoomState } from "../GameRoomState";
import { FinishRoundCommand } from "./FinishRoundCommand";

export class ReplaceHandCommand extends Command<GameRoomState, {sessionId: string}> {

  validate({sessionId} = this.payload){
    return this.state.gameRunning && !this.state.players.get(sessionId).isCzar && 
            !this.state.czarsTurn && !this.state.cardsPlayed.some(cardStack => cardStack.playedBy == sessionId);
  }

  execute({sessionId} = this.payload) {
    this.state.players.get(sessionId).cards.clear();
    this.state.players.get(sessionId).played = true;
    return [new FinishRoundCommand()];
  }

}