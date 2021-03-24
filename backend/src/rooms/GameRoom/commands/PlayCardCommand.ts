import { Command } from "@colyseus/command";
import { shuffleArrayInplace } from "../../../utils";
import { GameRoomState, PlayedCardStack, PlayedCard } from "../GameRoomState";

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

    let everybodyOnlinePlayed = false;
    this.state.players.forEach((player, id) => {
      if( !player.connected || player.isCzar)
        return
      everybodyOnlinePlayed = everybodyOnlinePlayed || this.state.cardsPlayed.some(cardStack => (cardStack.playedBy === id && cardStack.cards.length === this.state.blackCard.blanks));
    })

    if(everybodyOnlinePlayed){
      shuffleArrayInplace(this.state.cardsPlayed);
      this.state.cardsPlayed.forEach(cardStack => {
        cardStack.cards.forEach(card => {
          card['$changes'].touch(0);
        })
      })
      this.state.czarsTurn = true;
    }
  }

  

}