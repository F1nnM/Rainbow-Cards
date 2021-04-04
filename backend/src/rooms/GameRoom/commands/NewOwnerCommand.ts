import { Command } from "@colyseus/command";
import { GameRoomState } from "../GameRoomState";

export class NewOwnerCommand extends Command<GameRoomState, {lastOwnerId: string}> {

  execute({lastOwnerId} = this.payload) {
    if(this.state.players.get(lastOwnerId).connected) // owner returned
        return;
    let newOwner: string;
    this.state.players.forEach((player, id) => {
        if(player.connected)
          newOwner = id
    })
    if (newOwner){
        this.state.players.get(newOwner).isOwner = true;
        this.state.players.get(lastOwnerId).isOwner = false;
    }
    else{
        console.log("no new owner found, disconnecting all")
        this.room.disconnect()
    }
  }

}