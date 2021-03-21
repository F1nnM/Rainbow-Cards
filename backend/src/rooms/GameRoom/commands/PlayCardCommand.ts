import { Command } from "@colyseus/command";
import { shuffleArrayInplace } from "../../../utils";
import { GameRoomState, PlayedCard } from "../GameRoomState";

export class PlayCardCommand extends Command<GameRoomState, {sessionId: string, index: number}> {

  validate({sessionId} = this.payload){
    return this.state.gameRunning && !this.state.players.get(sessionId).isCzar && !this.state.czarsTurn && !this.state.cardsPlayed.some(card => {
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

    let everybodyOnlinePlayed = false;
    this.state.players.forEach((player, id) => {
      if( !player.connected || player.isCzar)
        return
      everybodyOnlinePlayed = everybodyOnlinePlayed || this.state.cardsPlayed.some(card => card.playedBy == id);
    })

    if(everybodyOnlinePlayed){
      shuffleArrayInplace(this.state.cardsPlayed);
      this.state.czarsTurn = true;
    }
  }

  

}