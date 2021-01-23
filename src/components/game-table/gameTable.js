import React from 'react';
import {useSelector} from 'react-redux';



import Navbar from '../header/navbar/navbar.js';
import PlayerProgress from './player-progress/playerProgress.js';
import CombatArea from './combat-area/combatArea.js';
import ActiveCards from './active-cards/activeCards.js';
import Footer from '../footer/footer.js';
import './gameTable.scss';



export default function GamePage() {
  const gameTable = useSelector( state => state.game)
  console.log(gameTable)
  return (
    <>
    <Navbar/>
      <h2>{gameTable.people}</h2>
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
      <Footer/>
    </>
  );
}



