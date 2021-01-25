'use strict';

/*
Game state object containing all properties the game needs to manage, including such props as room id, players, player hands, player levels,current card decks and discard piles, incoming action from non turn player. 
*/

const Player = require('./player.js');
const { doorDeck, treasureDeck } = require('./card-list.js');
const gameEngine = require('./game-engine.js'); // probably unecessary here

/* TODO

1. list off all events that will need to happen
2. frame out what logic might need to happen for those events
3. keep functions small and simple as possible
4. bring in those function to either GameState of the game engine, not sure which yet
5. try and see if all events lead into the next required event
6. fill out player, state and cards as needed to help facilitate above functions

*/

// would this be better as a class?
const gameState = {
  // will players be added upon new game creation? or set p1-6 to new Player?
    roomId: username, // recieved from server/socket.io connection
    player1: {
      userName: null,
      level: 1,
      cardsInHand: [],
      totalCardsHeld: cardsInHand.length,
      maxCardsAllowed: 5,
      cardsEquipped: {
        headgear: null,
        armor: null,
        footgear: null,
        hand1: null,
        hand2: null,
        twoHanded: null,
      },
    }, 
    player2: null,
    player3: null,
    player4: null,
    player5: null,
    player6: null,
    playerLevels: null, // maybe combine in players? or pull from players?
    doorCardDeck: null, // bring in door card deck array
    doorCardDiscards: [], 
    treasureCardDeck: null, // bring in treasure card array
    treasureCardDiscards: [],
    inCombat: false, // separate function to manage combat?

};

module.exports = gameState;