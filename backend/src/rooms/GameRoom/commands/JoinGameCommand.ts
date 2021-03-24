import { Command } from "@colyseus/command";
import { GameRoomState, Player } from "../GameRoomState";

export class JoinGameCommand extends Command<GameRoomState, {sessionId: string, name: string}> {

  execute({sessionId, name} = this.payload) {
    let player = new Player();
    player.id = sessionId;
    if(!this.state.hasOwner){
        player.isOwner = true;
        this.state.hasOwner = true;
    }
    if (name)
      player.name = name;
    
    this.state.players.set(sessionId, player);
  }

}