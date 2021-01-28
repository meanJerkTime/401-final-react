const gameLogic = require("../src/game-objects/game-engine.js");
const { Monster, Equipment, LevelUp, Consumable } = require("../src/game-objects/card-creators.js");


class Player {
  constructor() {
    this.userName = ''
    this.level = 1;
    this.cardsInHand = [];
    this.cardsEquipped = {
      headGear: null,
      footGear: null,
      weapon: []
    };
  }
}

let player = new Player();

beforeAll((done) => {

  const hand = [
    new Equipment('Boots Of Butt-Kicking', 'image link', 2, null, 'footgear', null, false, 400),
    new Equipment('Buckler Of Swashing', 'image link', 2, null, 'held', 1, false, 400),
    new Equipment('Chainsaw Of Bloody Dismemberment', 'image link', 3, null, 'held', 2, true, 600),
    new Equipment('Eleven-Foot Pole', 'image link', 1, null, 'held', 2, false, 200),
    new Equipment('Flaming Armor', 'image link', 2, null, 'armor', null, false, 400),
    new Equipment('Helm Of Courage', 'image link', 1, null, 'headgear', null, false, 200),
  ]
  hand.forEach(item => player.cardsInHand.push(item));

  done();
  
})

describe("game logic will discard a card", () => {
  it("discards a card", () => {
    let card = player.cardsInHand[0];
    let response = gameLogic.discard(player, card)

    expect(response.length).toBe(5);
    expect(response.includes(card)).toBe(false);
  });

})