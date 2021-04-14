import { Command } from "@colyseus/command";
import { GameRoomState, Player } from "../GameRoomState";
import { DisplayWinnerCommand } from "./DisplayWinnerCommand";

export class NewRoundCommand extends Command<GameRoomState, {wait: number}> {

  validate(){
    return this.state.gameRunning;
  }

  async execute({wait} = this.payload) {

    return await new Promise((resolve) => {
      setTimeout(() => {

        // remove played cards
        this.state.cardsPlayed.clear();

        this.state.czarsTurn = false;
        this.state.czarDidVote = false;

        this.state.roundWinner = null;

        //determine new card czar. Not allowed to be the same as last round
        var possibleCzars: Player[] = [];

        var minTimesCzar = Infinity;

        this.state.players.forEach((player, id) => {
          if (!player.isCzar && player.connected){
            minTimesCzar = Math.min(minTimesCzar, player.timesCzar);
            possibleCzars.push(player);
          }
          else
            player.isCzar = false;
          
          if (player.connected)
            player.played = false;
        })

        possibleCzars = possibleCzars.filter(player => player.timesCzar === minTimesCzar);

        console.log(possibleCzars)

        let newCzarId: string;
        if (possibleCzars.length === 0){
          let winner: Player = null
          this.state.players.forEach(player => {
            if( ! winner || player.score > winner.score)
              winner=player
          });
          resolve([new DisplayWinnerCommand().setPayload({wait: 0, winnerId: winner.id})]);
          return;
        }
        else if (possibleCzars.length === 1)
          newCzarId = possibleCzars[0].id;
        else
          newCzarId = possibleCzars[Math.floor(Math.random()*possibleCzars.length)].id;
        this.state.players.get(newCzarId).isCzar = true;
        this.state.players.get(newCzarId).timesCzar++;

        if(this.state.blackCardStack.length == 0)
          this.state.refillBlackStack()
        this.state.blackCard = this.state.blackCardStack.pop()

        // draw cards until everyone has 10 cards. Handles players joining late
        this.state.players.forEach((player)=>{
          let maxCards = player.isCzar || !player.connected ? 10 : (9+this.state.blackCard.blanks)

          while(player.cards.length < maxCards){
            if(this.state.whiteCardStack.length == 0)
              this.state.refillWhiteStack()
            player.cards.push(this.state.whiteCardStack.pop())
          }
        })

        resolve(null);
      }, wait)
    })


  }

}