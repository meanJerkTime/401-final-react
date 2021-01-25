'use strict';

const Player = require('./player.js');
const { doorDeck, treasureDeck } = require('./card-list.js');

function gameEngine(currentState, currentAction) {

  // logic to update state goes here
  // switch statement to determine which helper function to call??
  // emit event to server??
  
  const { type, payload } = currentAction;

  switch (type) {
    case "EQUIP":
      equipCards(payload.player, payload.monster);
      //do we need to return a different state?? I see the newState down below...
      return currentState;
    case "BATTLE":
      combat(payload.player, payload.monster);
      //do we need to return a different state?? I see the newState down below...
      return currentState;
    case "DISCARD":
      discard(payload.player, payload.monster);
      return currentState;
    default:
      return currentState;
  }
  // return newState;

};

// helper functions to run game logic go below

function rollDice() {
  return Math.ceil(Math.random() * 6);
};

function equipCards(player, card) {
  // add card from action to player property of object
  // validate type of card and where card is equipped
  // update player combat strength

  const bodyPart = "";
  if (card.bodyPart) {
    bodyPart = card.bodyPart;
    let playerEquip = `${player}.cardsEquipped.${bodyPart}`
    playerEquip.push(card);
  }
  player.combatStrength + card.bonus;
};

function combat(player, monster) {
  // compare current player against monster level
  // cannot win on a tie (except warrior)
  // if win, player level + 1
  // if lose, allow chance to run away ( call runAway() )
    // if successful, end combat and end turn
    // if unsuccessful, player level - 1
  
  if (player.combatStrength > monster.level) { player.level + monster.levelsGiven };
  if (player.combatStrength <= monster.level) {
    if (player.runaway) {
      let roll = runAway();
      if(roll) {return}
    } else { player.level - 1 };
    
  };
  if (player.level <= 0) { player.level = 1 };
};

function runAway() {
  // call rollDice()
  // if < 5, fail to escape
  // if > 4, success

  let roll = rollDice();

  if (roll <= 5) { return false }
  else {return true}
  
};

function discard(player, card) {
  // remove the selected from the player hand array
  // ensure that player hand array is 5 or less

  // front end logic possibly??
  if (player.cardsInHand > 5) return "You must discard";
  // function logic
  let cardName = card.cardName;
  let list = player.cardsInHand;
  for (let i = 0; i < list.length; i++) {
    if (list[i].cardName === cardName) {
      list.splice(i, 1);
      break;
    }
  }
};

module.exports = gameEngine;