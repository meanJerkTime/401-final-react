// this will hold most of the gaming logic

const Player = require('./player.js');
const {doorDeck, treasureDeck} = require('./card-list');


class Game {
  constructor(battle, turn, deal) {
    this.battle = battle;
    this.turn = turn;
    this.deal = deal;
  }

  _diceRoll() {
    return Math.ceil(Math.random() * 6 )
  }

  

}

export default Game;