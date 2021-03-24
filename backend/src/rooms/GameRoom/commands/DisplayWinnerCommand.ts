import { Command } from "@colyseus/command";
import { GameRoomState } from "../GameRoomState";

export class DisplayWinnerCommand extends Command<GameRoomState, { wait: number, winnerId: string }> {

  async execute({ winnerId, wait } = this.payload) {
    await new Promise((resolve) => {
      setTimeout(() => {
        this.state.gameRunning = false;
        this.state.winner = winnerId;
        this.state.cardsPlayed.clear()
        this.clock.setTimeout(() => this.room.disconnect(), 60_000)
        resolve(null);
      }, wait);
    });
  }
}