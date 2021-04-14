import { Command } from "@colyseus/command";
import { GameRoomState, PlayedCardStack, PlayedCard } from "../GameRoomState";
import { FinishRoundCommand } from "./FinishRoundCommand";

export class PlayCardCommand extends Command<GameRoomState, {sessionId: string, index: number}> {

  validate({sessionId} = this.payload){
    return this.state.gameRunning && !this.state.players.get(sessionId).isCzar && !this.state.czarsTurn && !this.state.cardsPlayed.some(cardStack => {
      return cardStack.playedBy == sessionId && cardStack.cards.length >= this.state.blackCard.blanks
    })
  }

  execute({sessionId, index} = this.payload) {
    let handCard = this.state.players.get(sessionId).cards[index];
    let playedCardStack = this.state.cardsPlayed.find(stack => stack.playedBy == sessionId)
    if (!playedCardStack){
      playedCardStack = new PlayedCardStack()
      playedCardStack.playedBy = sessionId;
      this.state.cardsPlayed.push(playedCardStack);
    }
    let card = new PlayedCard();
    card.content = handCard.content;
    card.mark = handCard.mark;
    playedCardStack.cards.push(card)
    this.state.players.get(sessionId).cards.deleteAt(index);
    this.state.players.get(sessionId).played = playedCardStack.cards.length >= this.state.blackCard.blanks;

    return [new FinishRoundCommand()]
  }

  

}