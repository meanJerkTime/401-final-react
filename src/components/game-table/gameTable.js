import React from 'react';
import LoggedInNavbar from '../header/navbar/loggedInNavbar.js';
import PlayerProgress from './player-progress/playerProgress.js';
import CombatArea from './combat-area/combatArea.js';
import ActiveCards from './active-cards/activeCards.js';
import Footer from '../footer/footer.js';
import './gameTable.scss';
import {useSelector} from 'react-redux';



export default function GamePage() {
  const user = useSelector( state => state.user);
  console.log('user from game page is ', user.token);

  // return (
  //   <>
  //   <LoggedInNavbar/>
  //     <div id="GameTable">
        
  //       <div className="grid-container">
  //         <div className='activeCards'>
  //           <ActiveCards />
  //         </div>
  //         <div className='combatArea'>
  //           <CombatArea />
  //         </div>
  //         <div className='playersProgress'>
  //           <PlayerProgress />
  //         </div>
  //       </div>
  //     </div>
  //     <Footer/>
  //   </>
  //   );

  if (user.token){
    
    return (
      <>
      <LoggedInNavbar/>
        <div id="GameTable">
          
          <div className="grid-container">
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
  } else {
    return (
      <>you are not logged in</>
    )
  }
}



