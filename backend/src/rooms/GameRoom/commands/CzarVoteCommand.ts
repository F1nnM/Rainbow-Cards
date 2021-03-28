import { Command } from "@colyseus/command";
import { GameRoomState } from "../GameRoomState";
import { DisplayWinnerCommand } from "./DisplayWinnerCommand";
import { NewRoundCommand } from "./NewRoundCommand";

export class CzarVoteCommand extends Command<GameRoomState, {sessionId: string, index: number}> {

  validate({sessionId} = this.payload){
    return this.state.gameRunning && this.state.players.get(sessionId).isCzar && this.state.czarsTurn && !this.state.czarDidVote;
  }

  execute({index} = this.payload) {
    this.state.cardsPlayed[index].chosenByCzar = true;
    this.state.czarDidVote = true;
    let winnerId: string = this.state.cardsPlayed[index].playedBy;
    this.state.roundWinner = winnerId;
    let winner = this.state.players.get(winnerId);
    winner.score ++;
    if (winner.score >= this.state.pointsToWin)
      return [new DisplayWinnerCommand().setPayload({wait: 5000, winnerId: winnerId})]
    else{
      return [new NewRoundCommand().setPayload({wait: 5000})]
    }
    
  }

}