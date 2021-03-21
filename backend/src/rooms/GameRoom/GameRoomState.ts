import { Schema, ArraySchema, MapSchema, type, filter } from "@colyseus/schema";
import { Client } from "colyseus"
import { blackSets, getShuffledStack, whiteSets } from "../../cards";

export class Card extends Schema {

  @type("string")
  content: string;

  @type("string")
  mark: string;

}

export class Player extends Schema {

  @filter(function(this: Player, client: Client, value: Player['cards'], root: Schema) {
    return client.sessionId === this.id
  })
  @type([ Card ])
  cards = new ArraySchema<Card>();

  @type("uint8")
  score: number = 0;

  @type("boolean")
  isCzar: boolean = false;

  @type("boolean")
  connected: boolean = true;

  @type("boolean")
  left: boolean = false;

  @type("string")
  name: string = "Anonymous";

  @type("boolean")
  isOwner: boolean = false;

  id: string;
}

function everybodyPlayedFilter(client: Client, value: PlayedCard['content'], gameRoom: GameRoomState){
  let everybodyOnlinePlayed = false;
  gameRoom.players.forEach((player, id) => {
    if( !player.connected || player.isCzar)
      return
    everybodyOnlinePlayed = everybodyOnlinePlayed || gameRoom.cardsPlayed.some(card => card.playedBy == client.id);
  })
  return everybodyOnlinePlayed
}

export class PlayedCard extends Schema {

  @filter(everybodyPlayedFilter)
  @type("string")
  content: string;

  @filter(everybodyPlayedFilter)
  @type("string")
  mark: string;

  @type("boolean")
  chosenByCzar: boolean = false;

  playedBy: string;

}

export class GameRoomState extends Schema {

  @type( Card )
  blackCard: Card;

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

  blackCardStack: Card[];

  whiteCardStack: Card[];

  sets: string[];

  hasOwner: boolean = false;

  initStacks(){
    this.refillBlackStack()
    this.refillWhiteStack()
  }

  refillWhiteStack() {
    this.whiteCardStack = [];
    let newCards = getShuffledStack(whiteSets, this.sets);
    for (let cardData of newCards){
      let card = new Card();
      card.content = cardData.text;
      card.mark = cardData.mark;
      this.whiteCardStack.push(card);
    }
  }

  refillBlackStack() {
    this.blackCardStack = []
    let newCards = getShuffledStack(blackSets, this.sets)
    for (let cardData of newCards){
      let card = new Card();
      card.content = cardData.text;
      card.mark = cardData.mark;
      this.blackCardStack.push(card);
    }
  }

}