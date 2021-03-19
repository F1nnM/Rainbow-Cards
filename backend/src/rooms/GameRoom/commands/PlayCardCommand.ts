import { Command } from "@colyseus/command";
import { shuffleArrayInplace } from "../../../utils";
import { GameRoomState, PlayedCard } from "../GameRoomState";

export class PlayCardCommand extends Command<GameRoomState, {sessionId: string, index: number}> {

  validate({sessionId} = this.payload){
    return this.state.gameRunning && !this.state.players.get(sessionId).isCzar && !this.state.cardsPlayed.some(card => {
      return card.playedBy == sessionId
    })
  }

  execute({sessionId, index} = this.payload) {
    let handCard = this.state.players.get(sessionId).cards[index];
    let card = new PlayedCard();
    card.content = handCard.content;
    card.mark = handCard.mark;
    card.playedBy = sessionId;
    this.state.cardsPlayed.push(card);
    this.state.players.get(sessionId).cards.deleteAt(index);
    if(this.state.cardsPlayedNumber === (this.state.players.size - 1)){ // see below comment
      shuffleArrayInplace(this.state.cardsPlayed);
    }
    
    this.state.cardsPlayedNumber++; // setting the card number equal to the player number will show all cards. We want to show them after they have been shuffled.
  }

}