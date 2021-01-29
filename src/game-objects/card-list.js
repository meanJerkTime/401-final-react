// 'use strict';

// // collection of classes used to generate new cards

// const {Monster, Equipment, LevelUp, Consumable, } = require('./card-creators.js');

// /* Monster cards include:
//     - name
//     - image
//     - level
//     - undead
//     - modifier
//     - badStuff
//     - levelsGiven
//     - treasuresGiven
// */

// const doorDeck = [

//   // Monster cards
//   new Monster( 'Bigfoot', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/bigfoot.png?raw=true', 12, false, '+3 against dwarves and halflings', 'lose your headgear', 1, 3 ),

//   new Monster( 'Crabs', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/crabs.png?raw=true', 1, false, 'cannot escape', 'discard all armor and all items worn below the waist', 1, 1 ),

//   new Monster( 'Flying Frogs', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/flying-frogs.png?raw=true', 2, false, '-2 to run away', 'lose two levels', 1, 1 ),

//   new Monster( 'Gazebo', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/gazebo.png?raw=true', 8, false, 'cannot recieve help', 'lose 3 levels', 1, 2 ),

//   new Monster( 'Gelatinous Octahedron', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/gelatinous-octahedron.png?raw=true', 2, false, '+1 to run away', 'drop all big items', 1, 1 ),

//   new Monster( 'Ghoulfiends', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/ghoulfiends.png?raw=true', 8, false, 'no bonus from items, use level only', 'become equal to lowest level payer', 1, 2 ),

//   new Monster( 'Harpies', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/harpies.png?raw=true', 4, false, '+5 against wizards', 'lose two levels', 1, 2 ),

//   new Monster( 'Lame Goblin', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/lame-goblin.png?raw=true', 1, false, '+1 to run away', 'lose one level', 1, 1 ),

//   new Monster( 'Large Angry Chicken', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/large-angry-chicken.png?raw=true', 2, false, '+1 level if you defeat it with fire or flame', 'lose a level', 1, 1 ),

//   new Monster( 'Lawyers', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/lawyers.png?raw=true', 6, false, 'will not attack thief, thieves can discard two treasures and draw two face down treasures', 'all players take a card from your hand starting with left, discard remainders', 1, 2 ),

//   new Monster( 'Maul Rat', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/maul-rat.png?raw=true', 1, false, '+3 against clerics', 'lose a level', 1, 1 ),

//   new Monster( 'Mr. Bones', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/mr-bones.png?raw=true', 2, true, 'lose a level even if run away', 'lose two levels', 1, 1 ),

//   new Monster( 'Net Troll', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/net-troll.png?raw=true', 10, false, 'null', 'player(s) of highest level take 1 item from you', 1, 3 ),

//   new Monster( 'Platycore', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/platycore.png?raw=true', 6, false, '+6 against wizards', 'discard whole hand or lose two levels', 1, 2 ),

//   new Monster( 'Plutonium Dragon', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/plutonium-dragon.png?raw=true', 20, false, 'will not pursue level 5 or less', 'death', 2, 5 ),

//   new Monster( 'Potted Plant', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/potted-plant.png?raw=true', 1, false, 'elves gain +1 treasure', 'None, escape is automatic', 1, 1 ),

//   new Monster( 'Shrieking Geek', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/shrieking-geek.png?raw=true', 6, false, '+6 against warriors', 'discard any race and class', 1, 2 ),

//   new Monster( 'Stoned Golem', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/stoned-golem.png?raw=true', 14, false, 'Can automatically run away except for halflings must fight', 'death', 1, 4 ),

//   new Monster( 'Undead Horse', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/undead-horse.png?raw=true', 4, true, '+5 against dwarves', 'lose two levels', 1, 2 ),

//   new Monster( 'Unspeakably Awful Indescribable Horror', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/unspeakably-awful.png?raw=true', 14, false, '+4 against warriors', 'death for anyone but wizards, wizards lose their class', 1, 4 ),
  
//   new Monster( 'Wight Brothers', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/door-cards/wight-brothers.png?raw=true', 16, true, 'Free to run away level 3 or lower, level 3 or higher loses two levels if run away', 'reduced to level 1', 2, 4 ),

// ];

// /* LevelUp cards include:
//     - name
//     - image
//     - effect
//     - additional effect, i.e 'Whine at the GM' and 'Mutilate the Bodies'
// */

// /* Equipment cards include:
//     - name
//     - image
//     - bonus
//     - exception
//     - bodyPart
//     - numberOfHands
//     - bigItem
//     - value
// */

// /* Consumable cards include:
//     - name
//     - image
//     - modifier, bonus to combat
//     - effect, non-combat bonuses
//     - value
// */

// const treasureDeck = [

//   // level up cards
//   new LevelUp( '1000 Gold Pieces', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/1000-gold-pieces.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'null', 'null', 0, false, 0, 'gain a level', 'null' ),

//   new LevelUp( 'Boil an Anthill', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/boil-anthill.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'null', 'null', 0, false, 0, 'gain a level', 'null' ),

//   new LevelUp( 'Bribe GM With Food', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/bribe-gm-with-food.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'null', 'null', 0, false, 0, 'gain a level', 'null' ),

//   new LevelUp( 'Convenient Addition Error', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/convenient-error.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'null', 'null', 0, false, 0, 'gain a level', 'null' ),

//   new LevelUp( 'Invoke Obscure Rules', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/obscure-rules.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'null', 'null', 0, false, 0, 'gain a level', 'null' ),

//   new LevelUp( 'Mutilate the Bodies', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/mutilate-bodies.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'null', 'null', 0, false, 0, 'gain a level', 'playable after any combat' ),

//   new LevelUp( 'Potion of General Studliness', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/general-studliness.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'null', 'null', 0, false, 0, 'gain a level', 'null' ),

//   new LevelUp( 'Whine At The GM', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/whine-at-gm.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'cannot use if currently the highest level player or tied for the highest', 'null', 0, false, 0, 'gain a level', 'null' ),

//   // equipable items
//   new Equipment( 'Boots Of Butt-Kicking', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/boots-of-butt-kicking.png?raw=true', 2, null, 'footgear', null, false, 400 ),

//   new Equipment( 'Buckler Of Swashing', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/buckler-swashing.png?raw=true', 2, null, 'held', 1, false, 400 ),

//   new Equipment( 'Chainsaw Of Bloody Dismemberment', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/chainsaw-of-bloody-dismemberment.png?raw=true', 'equipment', 600, 3, 'null', 'hands', 2, true, 0, 'null', 'null' ),

//   new Equipment( 'Eleven-Foot Pole', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/eleven-foot-pole.png?raw=true', 'equipment', 200, 1, 'null', 'hands', 2, false, 0, 'null', 'null' ),

//   new Equipment( 'Flaming Armor', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/flaming-armor.png?raw=true', 'equipment', 400, 2, 'null', 'body', 0, false, 0, 'null', 'null' ),

//   new Equipment( 'Helm of Courage', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/helm-of-courage.png?raw=true', 'equipment', 200, 1, 'null', 'head', 0, false, 0, 'effect string', 'null' ),

//   new Equipment( 'Horny Helmet', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/horny-helmet.png?raw=true', 'equipment', 600, 1, '+3 for elves', 'head', 0, false, 0, 'null', 'null' ),

//   new Equipment( 'Huge Rock', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/huge-rock.png?raw=true', 'equipment', 0, 3, 'null', 'hands', 2, true, 0, 'null', 'null' ),

//   new Equipment( 'Leather Armor', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/leather-armor.png?raw=true', 'equipment', 200, 1, 'null', 'body', 0, false, 0, 'null', 'null' ),

//   new Equipment( 'Mithril Armor', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/mithril-armor.png?raw=true', 'equipment', 600, 3, 'not usable by wizard', 'body', 0, false, 0, 'null', 'null' ),

//   new Equipment(  'Pantyhose of Giant Strength', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/pantyhose-giant-strength.png?raw=true', 'equipment', 600, 3, 'not usable by', 'null', 0, false, 0, 'null', 'null'  ),

//   new Equipment( 'Rat on a Stick', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/rat-stick.png?raw=true', 'equipment', 0, 1, 'null', 'hands', 1, false, 0, 'may discard for an automatic escape from any monster level 8 or below', 'null' ),

//   new Equipment( 'Really Impressive Title', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/really-impressive-title.png?raw=true', 'equipment', 0, 3, 'null', 'null', 0, false, 0, 'null', 'null' ),

//   new Equipment( 'Slimy Armor', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/slimy-armor.png?raw=true', 'equipment', 200, 1, 'null', 'body', 0, false, 0, 'null', 'null' ),

//   new Equipment( 'Sneaky Bastard Sword', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/sneaky-bastard-sword.png?raw=true', 'equipment', 400, 2, 'null', 'hands', 1, false, 0, 'null', 'null' ),

//   new Equipment( 'Spiky Knees', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/spiky-knees.png?raw=true', 'equipment', 200, 1, 'null', 'null', 0, false, 0, 'null', 'null' ),

//   //Items below commented out because they'll be extra after MVP is met. -Diane



//   // new Equipment( 'Bad-Ass Bandana', 'image link', 3, 'usable by human only', 'headgear', null, false, 400 ),

//   // new Equipment( 'Bow With Ribbons', 'image link', 4, 'usable by elf only', 'held', 2, false, 800 ),

//   // new Equipment( 'Broad Sword', 'image link', 3, 'usable by females only', 'held', 1, false, 400 ),

//   // new Equipment( 'Cheese Grater Of Peace', 'image link', 3, 'usable by clerics only', 'held', 1, false, 400 ),

//   // new Equipment( 'Cloak Of Obscurity', 'image link', 4, 'usable by thief only', null, null, false, 600 ),

//   // new Equipment( 'Dagger Of Treachery', 'image link', 3, 'usable by thief only', 'held', 1, false, 400 ),

//   // new Equipment( 'Gentleman\'s Club', 'image link', 3, 'usable by males only', 'held', 1, false, 400 ),

//   // new Equipment( 'Hammer Of Kneecapping', 'image link', 4, 'usable by dwarf only', 'held', 1, false, 600 ),

//   // new Equipment( 'Mace Of Sharpness', 'image link', 4, 'usable by clerics only', 'held', 1, false, 600 ),

//   // new Equipment( 'Pointy Hat', 'image link', 3, 'usable by wizard only', 'headgear', null, false, 400 ),

//   // new Equipment( 'Rapier Of Unfairness', 'image link', 3, 'usable by elf only', 'held', 1, false, 600 ),

//   // new Equipment( 'Shield Of Ubiquity', 'image link', 4, 'usable by warrior only', 'held', 1, true, 600 ),

//   // new Equipment( 'Staff Of Napalm', 'image link', 5, 'usable by wizard only', 'held', 2, false, 800 ),

//   // new Equipment( 'Stepladder', 'image link', 3, 'usable by halfling only', null, null, true, 400 ),

//   // new Equipment( 'Swiss Army Polearm', 'image link', 4, 'usable by human only', 'held', 2, false, 600 ),


//   // consumable items

// ];

// console.log(treasureDeck.length);

// module.exports = {
//   doorDeck,
//   treasureDeck,
// };