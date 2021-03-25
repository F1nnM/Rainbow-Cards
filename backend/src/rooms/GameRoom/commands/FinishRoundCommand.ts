import { Command } from "@colyseus/command";
import { shuffleArrayInplace } from "../../../utils";
import { GameRoomState, PlayedCardStack, PlayedCard } from "../GameRoomState";
import { NewRoundCommand } from "./NewRoundCommand";

export class FinishRoundCommand extends Command<GameRoomState> {

    validate() {
        let everybodyOnlinePlayed = false;
        this.state.players.forEach((player, id) => {
            if (!player.connected || player.isCzar)
                return
            everybodyOnlinePlayed = everybodyOnlinePlayed || this.state.cardsPlayed.some(cardStack => (cardStack.playedBy === id && cardStack.cards.length === this.state.blackCard.blanks)) || player.cards.length == 0;
        })
        return everybodyOnlinePlayed
    }

    execute() {
        if(this.state.cardsPlayed.length == 0)
            return [new NewRoundCommand().setPayload({wait: 5000})]
        shuffleArrayInplace(this.state.cardsPlayed);
        this.state.cardsPlayed.forEach(cardStack => {
            cardStack.cards.forEach(card => {
                card['$changes'].touch(0);
            })
        })
        this.state.czarsTurn = true;
    }



}