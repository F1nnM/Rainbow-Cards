import { Command } from "@colyseus/command";
import { GameRoomState } from "../GameRoomState";

export class NewRoundCommand extends Command<GameRoomState> {

  validate(){
    return this.state.gameRunning;
  }

  execute() {
    // remove played cards
    this.state.cardsPlayed.clear();
    this.state.cardsPlayedNumber = 0;

    this.state.blackCard = "Up and running"

    // draw cards until everyone has 10 cards. Handles players joining late
    this.state.players.forEach((player)=>{
      while(player.cards.length < 10)
        player.cards.push('white_card'+ Math.floor(Math.random()*100));
    })

    
    //determine new card czar. Not allowed to be the same as last round
    var possibleCzars: string[] = []

    this.state.players.forEach((player, id) => {
      if (!player.isCzar)
        possibleCzars.push(id);
      else
        player.isCzar = false;
    })

    var newCzarId: string = possibleCzars[Math.floor(Math.random()*possibleCzars.length)];
    this.state.players.get(newCzarId).isCzar = true;
  }

}