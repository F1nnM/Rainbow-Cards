import { Command } from "@colyseus/command";
import { shuffleArrayInplace } from "../../../utils";
import { GameRoomState } from "../GameRoomState";
import { NewRoundCommand } from "./NewRoundCommand";

export class FinishRoundCommand extends Command<GameRoomState> {

    validate() {
        let everybodyOnlinePlayed = true;
        this.state.players.forEach((player, id) => {
            if (!player.connected || player.isCzar)
                return
            everybodyOnlinePlayed = everybodyOnlinePlayed && player.played;
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