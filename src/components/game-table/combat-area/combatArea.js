import React from 'react';
import './combatArea.scss';
import CardsInHand from '../cards-in-hand/cardsInHand.js';
import Monster from '../monster/monster.js';



function CombatArea() {
  return (
    <>
      <div className="combat-area-grid">
          <Monster/>
          <CardsInHand />
      </div>
    </>
  );
}


export default CombatArea;

