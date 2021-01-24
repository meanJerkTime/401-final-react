'use strict';

// collection of classes used to generate new cards

const {Monster, Equipment, LevelUp, Consumable, } = require('./card-creators.js');

/* Monster cards include:
    - name
    - image
    - level
    - undead
    - modifier
    - badStuff
    - levelsGiven
    - treasuresGiven
*/

const doorDeck = [

  // Monster cards
  new Monster( 'Bigfoot', 'image link', 12, false, '+3 against dwarves and halflings', 'lose your headgear', 1, 3 ),
  new Monster( 'Crabs', 'image link', 1, false, 'cannot escape', 'discard all armor and all items worn below the waist', 1, 1 ),
  new Monster( 'Flying Frogs', 'image link', 2, false, '-2 to run away', 'lose two levels', 1, 1 ),
  new Monster( 'Gazebo', 'image link', 8, false, 'cannot recieve help', 'lose 3 levels', 1, 2 ),
  new Monster( 'Gelatinous Octahedron', 'image link', 2, false, '+1 to run away', 'drop all big items', 1, 1 ),
  new Monster( 'Ghoulfiends', 'image link', 8, false, 'no bonus from items, use level only', 'become equal to lowest level payer', 1, 2 ),
  new Monster( 'Harpies', 'image link', 4, false, '+5 against wizards', 'lose two levels', 1, 2 ),
  new Monster( 'Lame Goblin', 'image link', 1, false, '+1 to run away', 'lose one level', 1, 1 ),
  new Monster( 'Large Angry Chicken', 'image link', 2, false, '+1 level if you defeat it with fire or flame', 'lose a level', 1, 1 ),
  new Monster( 'Lawyers', 'image link', 6, false, 'will not attack thief, thieves can discard two treasures and draw two face down treasures', 'all players take a card from your hand starting with left, discard remainders', 1, 2 ),
  new Monster( 'Maul Rat', 'image link', 1, false, '+3 against clerics', 'lose a level', 1, 1 ),
  new Monster( 'Mr. Bones', 'image link', 2, true, 'lose a level even if run away', 'lose two levels', 1, 1 ),
  new Monster( 'Net Troll', 'image link', 10, false, null, 'player(s) of highest level take 1 item from you', 1, 3 ),
  new Monster( 'Platycore', 'image link', 6, false, '+6 against wizards', 'discard whole hand or lose two levels', 1, 2 ),
  new Monster( 'Plutonium Dragon', 'image link', 20, false, 'will not pursue level 5 or less', 'death', 2, 5 ),
  new Monster( 'Potted Plant', 'image link', 1, false, 'elves gain +1 treasure', 'None, escape is automatic', 1, 1 ),
  new Monster( 'Shrieking Geek', 'image link', 6, false, '+6 against warriors', 'discard any race and class', 1, 2 ),
  new Monster( 'Stoned Golem', 'image link', 14, false, 'Can automatically run away except for halflings must fight', 'death', 1, 4 ),
  new Monster( 'Undead Horse', 'image link', 4, true, '+5 against dwarves', 'lose two levels', 1, 2 ),
  new Monster( 'Unspeakably Awful Indescribable Horror', 'image link', 14, false, '+4 against warriors', 'death for anyone but wizards, wizards lose their class', 1, 4 ),
  new Monster( 'Wight Brothers', 'image link', 16, true, 'Free to run away level 3 or lower, level 3 or higher loses two levels if run away', 'reduced to level 1', 2, 4 ),

];

/* LevelUp cards include:
    - name
    - image
    - effect
    - additional effect, i.e 'Whine at the GM' and 'Mutilate the Bodies'
*/

/* Equipment cards include:
    - name
    - image
    - bonus
    - exception
    - bodyPart
    - numberOfHands
    - bigItem
    - value
*/

/* Consumable cards include:
    - name
    - image
    - modifier, bonus to combat
    - effect, non-combat bonuses
    - value
*/

const treasureDeck = [

  // level up cards
  new LevelUp( '1000 Gold Pieces', 'image link', (player)=>{player.level + 1}, null ),
  new LevelUp( 'Boil An Anthill', 'image link', (player)=>{player.level + 1}, null ),
  new LevelUp( 'Bribe GM With Food', 'image link', (player)=>{player.level + 1}, null ),
  new LevelUp( 'Convenient Addition Error', 'image link', (player)=>{player.level + 1}, null ),
  new LevelUp( 'Invoke Obscure Rules', 'image link', (player)=>{player.level + 1}, null ),
  new LevelUp( 'Mutilate The Bodies', 'image link', (player)=>{player.level + 1}, 'playable only after combat' ),
  new LevelUp( 'Potion Of General Studliness', 'image link', (player)=>{player.level + 1}, null ),
  new LevelUp( 'Whine At The GM', 'image link', (player)=>{player.level + 1}, 'Cannont use if highest level or tied with highest level' ),

  // equipable items
  new Equipment( 'Boots Of Butt-Kicking', 'image link', 2, null, 'footgear', null, false, 400 ),
  new Equipment( 'Buckler Of Swashing', 'image link', 2, null, 'held', 1, false, 400 ),
  new Equipment( 'Chainsaw Of Bloody Dismemberment', 'image link', 3, null, 'held', 2, true, 600 ),
  new Equipment( 'Eleven-Foot Pole', 'image link', 1, null, 'held', 2, false, 200 ),
  new Equipment( 'Flaming Armor', 'image link', 2, null, 'armor', null, false, 400 ),
  new Equipment( 'Helm Of Courage', 'image link', 1, null, 'headgear', null, false, 200 ),
  new Equipment( 'Horny Helmet', 'image link', 1, '+3 for Elves', 'headgear', null, false, 600 ),
  new Equipment( 'Huge Rock', 'image link', 3, null, 'held', 2, true, 0 ),
  new Equipment( 'Leather Armor', 'image link', 1, null, 'armor', null, false, 200 ),
  new Equipment( 'Mithril Armor', 'image link', 3, 'not usable by wizards', 'armor', null, true, 600 ),
  new Equipment( 'Pantyhose Of Giant Strength', 'image link', 3, 'not usable by warrior', null, null, false, 600 ),
  new Equipment( 'Rat On A Stick', 'image link', 1, 'may discard to automatically escape from a monster level 8 or below', 'held', 1, false, 0 ),
  new Equipment( 'Really Impressive Title', 'image link', 3, null, null, null, false, 0 ),
  new Equipment( 'Slimy Armor', 'image link', 1, null, 'armor', null, false, 200 ),
  new Equipment( 'Sneaky Bastard Sword', 'image link', 2, null, 'held', 1, false, 400 ),
  new Equipment( 'Spiky Knees', 'image link', 1, null, null, null, false, 200 ),
  new Equipment( 'Bad-Ass Bandana', 'image link', 3, 'usable by human only', 'headgear', null, false, 400 ),
  new Equipment( 'Bow With Ribbons', 'image link', 4, 'usable by elf only', 'held', 2, false, 800 ),
  new Equipment( 'Broad Sword', 'image link', 3, 'usable by females only', 'held', 1, false, 400 ),
  new Equipment( 'Cheese Grater Of Peace', 'image link', 3, 'usable by clerics only', 'held', 1, false, 400 ),
  new Equipment( 'Claok Of Obscurity', 'image link', 4, 'usable by thief only', null, null, false, 600 ),
  new Equipment( 'Dagger Of Treachery', 'image link', 3, 'usable by thief only', 'held', 1, false, 400 ),
  new Equipment( 'Gentleman\'s Club', 'image link', 3, 'usable by males only', 'held', 1, false, 400 ),
  new Equipment( 'Hammer Of Kneecapping', 'image link', 4, 'usable by dwarf only', 'held', 1, false, 600 ),
  new Equipment( 'Mace Of Sharpness', 'image link', 4, 'usable by clerics only', 'held', 1, false, 600 ),
  new Equipment( 'Pointy Hat', 'image link', 3, 'usable by wizard only', 'headgear', null, false, 400 ),
  new Equipment( 'Rapier Of Unfairness', 'image link', 3, 'usable by elf only', 'held', 1, false, 600 ),
  new Equipment( 'Shield Of Ubiquity', 'image link', 4, 'usable by warrior only', 'held', 1, true, 600 ),
  new Equipment( 'Staff Of Napalm', 'image link', 5, 'usable by wizard only', 'held', 2, false, 800 ),
  new Equipment( 'Stepladder', 'image link', 3, 'usable by halfling only', null, null, true, 400 ),
  new Equipment( 'Swiss Army Polearm', 'image link', 4, 'usable by human only', 'held', 2, false, 600 ),

  // consumable items

];

console.log(treasureDeck.length);

module.exports = {
  doorDeck,
  treasureDeck,
};