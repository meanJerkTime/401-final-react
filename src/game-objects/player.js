'use strict';

// generic player object used for all games/plays

class Player {

  constructor(id, level, sex){
    this.id = id // socket.io id or some other id unique to each user
    this.level = level;
    this.cardsInHand = []; // default max of 5
    this.combatPower = 1
    this.maxCards = 5;
    this.equippedCards = {}; // all weapons/armor equipped to player
    this.sex = null; // should be chosen at game start
    this.race = 'human'; //defaults to human
    this.class = null; 
    this.currentBuff = null // any positive modifier applied i.e. plus 1 to run away
    this.currentDebuff = null // any negative effect currently applied i.e. curses 
    this.curse = null // curse card applies if any
  };

  // add methods below to modify player

  _updateLevel (battle) {
    if (battle) return this.level++;
    else return this.level--;
  };

  _applyCurse () {
    //stretch goal
  };

  _removeCurse() {
    //stretch goal
  };

  _changeClass () {
    //stretch goal
  };

  _changeRace () {
    //stretch goal
  };

  _discard(cardName) {
    //some sort of idea for other file
    if (this.cardsInHand > this.maxCards) return "You must discard";
    // function logic
    let card = cardName.cardName;
    let list = this.cardsInHand;
    for (let i = 0; i < list.length; i++) {
      if (list[i].cardName === card) {
        list.splice(i, 1);
        break;
      }
    }
  };

  _drawCards(card) {
    if (card) { this.cardsInHand.push(card) };
  };

  _equipCards(cardSelect) {
    if (cardSelect) {
      this.equippedCards.push(selection);
    }
  };

  _unequipCards () {
    //stretch goal
  };

  _sexChange() {
    //stretch goal
  };

};

let test = new Player(123, 5)
console.log(test.level);

module.exports = Player;