'use strict';

const Player = require('./player.js');
const { doorDeck, treasureDeck } = require('./card-list.js');

function gameEngine(currentState, currentAction) {

  // logic to update state goes here
  // switch statement to determine which helper function to call??
  // emit event to server??

  return newState;

};

// helper functions to run game logic go below

function rollDice() {
  return Math.ceil(Math.random() * 6);
};

function equipCards(player, card) {

  // add card from action to player property of object
  // validate type of card and where card is equipped
  // update player combat strength

};

function combat(player, monster) {

  // compare current player against monster level
  // cannot win on a tie (except warrior)
  // if win, player level + 1
  // if lose, allow chance to run away ( call runAway() )
    // if successful, end combat and end turn
    // if unsuccessful, player level - 1

};

function runAway(player, monster) {

  // call rollDice()
  // if < 5, fail to escape
  // if > 4, success

};

function discard(player, card) {

  // remove the selected from the player hand array
  // ensure that player hand array is 5 or less

};

module.exports = gameEngine;