import { Command } from "@colyseus/command";
import { Card, GameRoomState } from "../GameRoomState";
import { NewRoundCommand } from "./NewRoundCommand";

export class SkipRoundCommand extends Command<GameRoomState, {sessionId: string}> {

  validate({sessionId} = this.payload){
    return this.state.gameRunning && this.state.players.get(sessionId).isOwner
  }

  execute() {
    this.state.cardsPlayed.forEach(cardStack => {
        cardStack.cards.forEach(playedCard => {
            let newCard = new Card();
            newCard.content = playedCard.content
            newCard.mark = playedCard.mark
            this.state.players.get(cardStack.playedBy).cards.push(newCard)
        });
            
    })

    return [new NewRoundCommand().setPayload({wait: 0})]
    
  }

}