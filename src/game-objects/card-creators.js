'use strict';

/** Collection of classes for generating each type of card to keep all card objects consistent */

// Used for all cards that a player can equip permanently
class Equipment {

  constructor(cardName, image, bonus, exception, bodyPart, numberOfHands, bigItem, value) {
    this.type = 'equipment';
    this.cardName = cardName; // name of card
    this.image = image; // link to image of card face

    this.bonus = bonus; //  number indicating bonus to player combat strength
    this.exception = exception // i.e. usable by elves only
    this.bodyPart = bodyPart; // where the equipment goes i.e body == armor, feet == footgear
    this.numberOfHands = numberOfHands // this is how many hands a weapon/item uses i.e. 1 hand, 2 hand, -2 hands etc.
    this.bigItem = bigItem // boolean
    this.value = value; // will be a number pf gold pieces
  };

};

// Primarily for one time use items such as potions that aid in combat
class Consumable {

  constructor(cardName, image, modifier, effect, value) {
    this.type = 'consumable';
    this.cardName = cardName; // name of card
    this.image = image; // link to image of card face
    this.modifier = modifier; // the bonus given to combat
    this.effect = effect; // any other effect the card provides i.e. +1 to run away
    this.value = value; // will be a number of gold pieces
  };

};

// For use creating all level up type cards
class LevelUp {

  constructor(cardName, image, effect, other) {
    this.type = 'level up';
    this.cardName = cardName; // name of card
    this.image = image; // link to image of card face
    this.effect = effect; // player level +1
    this.other = other; // for use with Steal a Level, Mutilate the Bodies, Contemplate Navel etc. 
  };

};

// Class for generating all monsters. Is a standalone, will not be extended.
class Monster {

  constructor(cardName, image, level, undead, modifier, badStuff, levelsGiven, treasuresGiven) {
    this.type = 'monster';
    this.cardName = cardName; // name of card
    this.image = image; // link to image of card face
    this.level = level; // level of monster card
    this.undead = undead; // boolean
    this.modifier = modifier; // i.e. +5 against elves or will not attack women
    this.badStuff = badStuff; // what happens when you lose
    this.levelsGiven = levelsGiven; // # of levels given upon victory
    this.treasuresGiven = treasuresGiven; // # of treasures awarded upon victory
  };

};

module.exports = {
  Equipment,
  Consumable,
  LevelUp,
  Monster,
};