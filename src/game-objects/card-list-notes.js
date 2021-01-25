/*This file contains updates to the card data in the regular card-list file. This is how I added the cards to the database based on the schema that Peng created for it. I'm not sure if what I have below needs to actually replace the data in the card-list file to keep things consistent with the database, but if so, I'll just copy and paste it all over. -Diane */

[ 'Boots Of Butt-Kicking', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/boots-of-butt-kicking.png?raw=true', 'Equipment', 400, 2, 'null', 'footgear', 0, false, 0, 'null', 'null' ]

[ 'Buckler Of Swashing',
 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/buckler-swashing.png?raw=true','equipment', 400, 2, 'null', 'hands', 1, false, 0, 'null', 'null' ]

[ 'Chainsaw Of Bloody Dismemberment', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/chainsaw-of-bloody-dismemberment.png?raw=true', 'equipment', 600, 3, 'null', 'hands', 2, true, 0, 'null', 'null' ]

[  'Eleven-Foot Pole', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/eleven-foot-pole.png?raw=true', 'equipment', 200, 1, 'null', 'hands', 2, false, 0, 'null', 'null' ]

[ 'Flaming Armor', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/flaming-armor.png?raw=true', 'equipment', 400, 2, 'null', 'body', 0, false, 0, 'null', 'null' ]

[ 'Helm of Courage', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/helm-of-courage.png?raw=true', 'equipment', 200, 1, 'null', 'head', 0, false, 0, 'effect string', 'null' ]

[ 'Horny Helmet', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/horny-helmet.png?raw=true', 'equipment', 600, 1, '+3 for elves', 'head', 0, false, 0, 'null', 'null' ]

[ 'Huge Rock', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/huge-rock.png?raw=true', 'equipment', 0, 3, 'null', 'hands', 2, true, 0, 'null', 'null' ]

[ 'Leather Armor', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/leather-armor.png?raw=true', 'equipment', 200, 1, 'null', 'body', 0, false, 0, 'null', 'null' ]

[ 'Mithril Armor', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/mithril-armor.png?raw=true', 'equipment', 600, 3, 'not usable by wizard', 'body', 0, false, 0, 'null', 'null' ]

[ 'Pantyhose of Giant Strength', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/pantyhose-giant-strength.png?raw=true', 'equipment', 600, 3, 'not usable by', 'null', 0, false, 0, 'null', 'null' ]

[ 'Rat on a Stick', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/rat-stick.png?raw=true', 'equipment', 0, 1, 'null', 'hands', 1, false, 0, 'may discard for an automatic escape from any monster level 8 or below', 'null' ]

[ 'Really Impressive Title', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/really-impressive-title.png?raw=true', 'equipment', 0, 3, 'null', 'null', 0, false, 0, 'null', 'null' ]

[ 'Slimy Armor', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/slimy-armor.png?raw=true', 'equipment', 200, 1, 'null', 'body', 0, false, 0, 'null', 'null' ]

[ 'Sneaky Bastard Sword', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/sneaky-bastard-sword.png?raw=true', 'equipment', 400, 2, 'null', 'hands', 1, false, 0, 'null', 'null' ]

[ 'Spiky Knees', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/spiky-knees.png?raw=true', 'equipment', 200, 1, 'null', 'null', 0, false, 0, 'null', 'null' ]

//Level Up items

[ 'Mutilate the Bodies', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/mutilate-bodies.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'null', 'null', 0, false, 0, 'gain a level', 'playable after any combat' ]

[ '1000 Gold Pieces', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/1000-gold-pieces.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'null', 'null', 0, false, 0, 'gain a level', 'null' ]

[ 'Boil an Anthill', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/boil-anthill.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'null', 'null', 0, false, 0, 'gain a level', 'null' ]

[ 'Bribe GM With Food', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/bribe-gm-with-food.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'null', 'null', 0, false, 0, 'gain a level', 'null' ]

[ 'Convenient Addition Error', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/convenient-error.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'null', 'null', 0, false, 0, 'gain a level', 'null' ]

[ 'Invoke Obscure Rules', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/obscure-rules.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'null', 'null', 0, false, 0, 'gain a level', 'null' ]

[ 'Potion of General Studliness', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/general-studliness.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'null', 'null', 0, false, 0, 'gain a level', 'null' ]


[ 'Whine At The GM', 'https://github.com/meanJerkTime/401-final-react/blob/staged/assets/deck-images/treasure-cards/whine-at-gm.png?raw=true', 'level up', 0, (player)=>{player.level + 1}, 'cannot use if currently the highest level player or tied for the highest', 'null', 0, false, 0, 'gain a level', 'null' ]

/*This is a template for my reference. -Diane */

// [ 'name string', 'image string', 'level up', 0, (player)=>{player.level + 1}, 'null', 'null', null, false, 0, 'gain a level', 'null' ]