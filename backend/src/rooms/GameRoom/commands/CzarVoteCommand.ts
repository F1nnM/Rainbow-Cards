import { Command } from "@colyseus/command";
import { GameRoomState } from "../GameRoomState";

export class CzarVoteCommand extends Command<GameRoomState, {sessionId: string, index: number}> {

  validate({sessionId} = this.payload){
    return this.state.players.get(sessionId).isCzar;
  }

  execute({index} = this.payload) {
    this.state.cardsPlayed[index].chosenByCzar = true;
    let winner: string = this.state.cardsPlayed[index].playedBy;
    this.state.players.get(winner).score ++;
    
  }

}