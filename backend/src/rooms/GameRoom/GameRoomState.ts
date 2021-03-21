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

export class PlayedCard extends Schema {

  @filter(function everybodyPlayedFilter(client: Client, value: PlayedCard['content'], gameRoom: GameRoomState){
    return gameRoom.czarsTurn
  })
  @type("string")
  content: string;

  @filter(function everybodyPlayedFilter(client: Client, value: PlayedCard['content'], gameRoom: GameRoomState){
    return gameRoom.czarsTurn
  })
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

  @type([ PlayedCard ])
  cardsPlayed = new ArraySchema<PlayedCard>();

  @type("uint8")
  pointsToWin: number;

  @type("boolean")
  czarsTurn: boolean = false;

  czarDidVote: boolean = false;

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