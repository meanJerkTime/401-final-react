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

  new Monster( 'Bigfoot', 'image link', 12, false, '+3 against dwarves and halflings', 'lose your headgear', 1, 3 ),
  new Monster( 'Crabs', 'image link', 1, false, 'cannot escape', 'discard all armor and all items worn below the waist', 1, 1 ),
  new Monster( 'Flying Frogs', 'image link', 2, false, '-2 to run away', 'lose two levels', 1, 1 ),
  new Monster( 'Gazebo', 'image link', 8, false, 'cannot recieve help', 'lose 3 levels', 1, 2 ),
  new Monster( 'Gelatinous Octahedron', 'image link', 2, false, '+1 to run away', 'drop all big items', 1, 1 ),
  new Monster( 'Ghoulfiends', 'image link', 8, false, 'no bonus from items, use level only', 'become equal to lowest level payer', 1, 2 ),
  new Monster( 'Harpies', 'image link', 4, false, '+5 against wizards', 'lose two levels', 1, 2 ),
  new Monster( 'Lame Goblin', 'image link', 1, false, '+1 to run away', 'lose one level1', 1, 1 ),
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

const treasureDeck = [

  new LevelUp( '1000 Gold Pieces', 'image link', (player)=>{player.level + 1}, null ),
  new LevelUp( 'Boil An Anthill', 'image link', (player)=>{player.level + 1}, null ),
  new LevelUp( 'Bribe GM With Food', 'image link', (player)=>{player.level + 1}, null ),
  new LevelUp( 'Convenient Addition Error', 'image link', (player)=>{player.level + 1}, null ),
  new LevelUp( 'Invoke Obscure Rules', 'image link', (player)=>{player.level + 1}, null ),
  new LevelUp( 'Mutilate The Bodies', 'image link', (player)=>{player.level + 1}, 'playable only after combat' ),
  new LevelUp( 'Potion Of General Studliness', 'image link', (player)=>{player.level + 1}, null ),
  new LevelUp( 'Whine At The GM', 'image link', (player)=>{player.level + 1}, 'Cannont use if highest level or tied with highest level' ),

];

console.log(doorDeck);

module.exports = {
  doorDeck,
  treasureDeck,
};