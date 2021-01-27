import React from 'react';
import PlayerProgress from './player-progress/playerProgress.js';
import CombatArea from './combat-area/combatArea.js';
import ActiveCards from './active-cards/activeCards.js';
import TreasureCards from './treasure-cards/treasureCards.js';
import DoorCards from './door-cards/doorCards.js';
import Monster from './monster/monster.js';
import CardsInHand from './cards-in-hand/cardsInHand.js'
import './gameTable.scss';




export default function GamePage() {
 
  return (
    <>
    {/* <Navbar/> */}
      <div id="GameTable">
        
        <div className="grid-container">
          <div className='activeCards'>
            <ActiveCards />
          </div>
          <div className='treasure-cards'>
            <TreasureCards />
          </div>
          <div className='door-cards'>
            <DoorCards />
          </div>
          <div className='monster'>
            <Monster />
          </div>
          <div className='cards-in-hand'>
            <CardsInHand />
          </div>
          {/* <div className='combatArea'>
            <CombatArea />
          </div> */}

          <div className='playersProgress'>
            <PlayerProgress />
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}



