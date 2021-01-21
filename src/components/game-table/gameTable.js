import React from 'react';

import GameBoard from './game-board/gameBoard.js';
import './gameTable.scss';



export default function GamePage() {
  return (
    <>
      <div id="GameTable">
        
        <div class="grid-container">
          <GameBoard />
        </div>

      </div>
      
    </>
  );
}



