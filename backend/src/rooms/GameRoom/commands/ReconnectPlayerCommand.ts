import { Command } from "@colyseus/command";
import { GameRoomState } from "../GameRoomState";

export class ReconnectPlayerCommand extends Command<GameRoomState, {sessionId: string}> {

  execute({sessionId} = this.payload) {
    let player = this.state.players.get(sessionId);
    if (this.state.gameRunning && ! this.state.czarsTurn) {
      let maxCards = (9+this.state.blackCard.blanks)

      while(player.cards.length < maxCards){
        if(this.state.whiteCardStack.length == 0)
          this.state.refillWhiteStack()
        player.cards.push(this.state.whiteCardStack.pop())
      }
      player.played = false;
    }

    player.connected = true;
  }

}