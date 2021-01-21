import React from 'react';
import './combatArea.scss';
import CardsInHand from './cards-in-hand/cardsInHand.js';



function CombatArea() {
  return (
    <>
      <div className="combat-area-grid">
          <h1 className='monster'>monster</h1>
          <CardsInHand />
      </div>
    </>
  );
}


export default CombatArea;

