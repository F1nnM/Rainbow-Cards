import { Command } from "@colyseus/command";
import { GameRoomState, Player } from "../GameRoomState";

export class NewOwnerCommand extends Command<GameRoomState, {lastOwnerId: string}> {

  execute({lastOwnerId} = this.payload) {
    if(this.state.players.get(lastOwnerId).connected) // owner returned
        return;
    console.log("didn't return, searching new")
    let newOwner: string;
    this.state.players.forEach((player, id) => {
        console.log(id +" : "+ player.connected)
        if(player.connected)
        newOwner = id
    })
    console.log(newOwner)
    if (newOwner){
        console.log("found new owner: "+newOwner)
        this.state.players.get(newOwner).isOwner = true;
        this.state.players.get(lastOwnerId).isOwner = false;
    }
    else{
        console.log("no new owner found, disconnecting all")
        this.room.disconnect()
    }
  }

}