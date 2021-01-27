import React from 'react';

import './rules.scss';

export default function Rules() {

  return (
    <>
    <div class="rules-grid-container">
        <div class="r-2">
        <div className="game-rules">
            
        When the game starts, each player gets 4 treasure cards. Players will have 2 minutes to equip any items they've been dealt. Some equippable items will boost your combat power, so take advantage of this before the first player's turn starts!
        <br/>
        <br/>
        
        After 2 minutes, the first player's turn begins and they immediately enter combat with a monster. The winner is decided by who has a higher level or combat power.
        <br/>
        <br/>

        If a player defeats a monster, they gain a level. Each monster is also worth a certain amount of treasure cards that the player can draw after victory. 
        <br/>
        <br/>

        If a player loses to a monster, they lose a level. Some monsters have additional side effects if you lose, beware of those guys!
        <br/>
        <br/>

        The first player to slay a monster to reach level 10 is the winner! 
        

        </div>
        </div>

        <div class="sub-head">RULES</div>
        <div class="sub-foot"></div>
    </div>
    </>
  );
}

