// List of all cards created from all card classes

// Base class for all other cards
// There will be no 'new Cards'
class Card {

  constructor(cardName, image) {
    this.cardName = cardName; // name of card
    this.image = image; // link to image of card face
  };

};

// Base class for all cards that are items, equipment, spells, go up a levels etc
// There will be no 'new Items'
class Item extends Card {
  
  constructor(cardName, image, value) {
    super(cardName, image);
    this.value = value; // will be a number pf gold pieces
  };
  
};

// Used for all cards that a player can equip permanently
class Equipment extends Item {

  constructor(cardName, image, bonus, exception, bodyPart, numberOfHands, bigItem, value) {
    super(cardName, image, value);
    this.type = 'equipment'
    this.bonus = bonus; //  number indicating bonus to player combat strength
    this.exception = exception // i.e. usable by elves only
    this.bodyPart = bodyPart; // where the equipment goes i.e body == armor, feet == footgear
    this.numberOfHands = numberOfHands // this is how many hands a weapon/item uses i.e. 1 hand, 2 hand, -2 hands etc.
    this.bigItem = bigItem // boolean
  };

};

// Primarily for one time use items such as potions that aid in combat
class Consumable extends Item {

  constructor(cardName, image, modifier, effect, value) {
    super(cardName, image, value);
    this.type = 'consumable';
    this.modifier = modifier; // the bonus given to combat
    this.effect = effect; // any other effect the card provides i.e. +1 to run away
  };

};

// For use creating all level up type cards
class LevelUp extends Item {

  constructor(cardName, image, effect, other) {
    super(cardName, image);
    this.type = 'level up';
    this.effect = effect; // player level +1
    this.other = other; // for use with Steal a Level, Mutilate the Bodies, Contemplate Navel etc. 
  };

};

// Class for generating all monsters. Is a standalone, will not be extended.
class Monster extends Card {

  constructor(cardName, image, level, undead, modifier, badStuff, levelsGiven, treasuresGiven) {
    super(cardName, image);
    this.type = 'monster';
    this.level = level; // level of monster card
    this.undead = undead; // boolean
    this.modifier = modifier; // i.e. +5 against elves or will not attack women
    this.badStuff = badStuff; // what happens when you lose
    this.levelsGiven = levelsGiven; // # of levels given upon victory
    this.treasuresGiven = treasuresGiven; // # of treasures awarded upon victory
  };

};

module.exports = {
  Card,
  Item,
  Equipment,
  Consumable,
  LevelUp,
  Monster,
};