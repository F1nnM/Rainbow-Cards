import { Command } from "@colyseus/command";
import { GameRoomState } from "../GameRoomState";
import { NewRoundCommand } from "./NewRoundCommand";

export class CzarVoteCommand extends Command<GameRoomState, {sessionId: string, index: number}> {

  validate({sessionId} = this.payload){
    return this.state.gameRunning && this.state.players.get(sessionId).isCzar && this.state.czarsTurn && !this.state.czarDidVote;
  }

  execute({index} = this.payload) {
    this.state.cardsPlayed[index].chosenByCzar = true;
    let winnerId: string = this.state.cardsPlayed[index].playedBy;
    let winner = this.state.players.get(winnerId);
    winner.score ++;
    if (winner.score >= this.state.pointsToWin){
      this.state.gameRunning = false;
      this.state.winner = winner.id;
      this.clock.setTimeout(this.room.disconnect, 60_000)
    }
    this.state.czarDidVote = true;
    return [new NewRoundCommand().setPayload({wait: 5000})]
  }

}