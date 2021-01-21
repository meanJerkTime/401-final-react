import React from 'react';

import PlayerProgress from './player-progress/playerProgress.js';
import CombatArea from './combat-area/combatArea.js';
import ActiveCards from './active-cards/activeCards.js';
import './gameTable.scss';



export default function GamePage() {
  return (
    <>
      <div id="GameTable">
        
        <div class="grid-container">
          <div className='activeCards'>
          <ActiveCards />
          </div>
          <div className='combatArea'>
            <CombatArea />
          </div>
          <div className='playersProgress'>
            <PlayerProgress />
          </div>
        </div>
      </div>
    </>
  );
}



