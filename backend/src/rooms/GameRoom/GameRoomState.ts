import { Schema, ArraySchema, MapSchema, type, filter } from "@colyseus/schema";
import { Client } from "colyseus"

export class Player extends Schema {

  @filter(function(this: Player, client: Client, value: Player['cards'], root: Schema) {
    return client.sessionId === this.id
  })
  @type(["string"])
  cards = new ArraySchema<string>();

  @type("uint8")
  score: number = 0;

  @type("boolean")
  isCzar: boolean = false;

  @type("boolean")
  connected: boolean = true;

  @type("boolean")
  left: boolean = false;

  id: string;
}

export class PlayedCard extends Schema {

  @filter(function(gameRoom: GameRoomState){
    return gameRoom.cardsPlayedNumber === gameRoom.players.size
  })
  @type("string")
  content: string;

  @type("boolean")
  chosenByCzar: boolean = false;

  playedBy: string;

}

export class GameRoomState extends Schema {

  @type("string")
  blackCard: string = "Game hasn't started yet";

  @type({ map: Player })
  players = new MapSchema<Player>();

  @type("boolean")
  gameRunning: boolean = false;

  @type("string")
  winner: string;

  @type("uint8")
  cardsPlayedNumber: number = 0;

  @type([ PlayedCard ])
  cardsPlayed = new ArraySchema<PlayedCard>();

  @type("uint8")
  pointsToWin: number;

  blackCardPile: string[];

  whiteCardPile: string[];

  creatorLeft: boolean = false;

  owner: string;

  private: boolean;

}