import { Command } from "@colyseus/command";
import { GameRoomState, PlayedCard } from "../GameRoomState";

export class PlayCardCommand extends Command<GameRoomState, {sessionId: string, index: number}> {

  validate({sessionId} = this.payload){
    return this.state.gameRunning && !this.state.cardsPlayed.some(card => {
      card.playedBy == sessionId
    })
  }

  execute({sessionId, index} = this.payload) {
    let card = new PlayedCard();
    card.content = this.state.players.get(sessionId).cards[index];
    card.playedBy = sessionId;
    this.state.cardsPlayed.push(card);
    this.state.players.get(sessionId).cards.deleteAt(index);
    if(this.state.cardsPlayedNumber === (this.state.players.size - 1)){ // see below comment
      var cardsShuffled = this.state.cardsPlayed;
      for (let i = cardsShuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsShuffled[i], cardsShuffled[j]] = [cardsShuffled[j], cardsShuffled[i]];
      }
      this.state.cardsPlayed = cardsShuffled;
    }
    
    this.state.cardsPlayedNumber++; // setting the card number equal to the player number will show all cards. We want to show them after they have been shuffled.
  }

}