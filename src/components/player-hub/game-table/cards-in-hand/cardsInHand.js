import {React, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
import * as actions from '../../../../store/gameTableReducer.js';
import { pick } from 'lodash';
import { equipCards } from '../../../../game-objects/game-engine.js'; 

import './cardsInHand.scss';



export default function CardsInHand(props) {

  const [playerState, setPlayerState] = useState(props.localGameState);

  let userD = JSON.parse(localStorage.getItem("user login info"));
  // console.log('player state',playerState);

  
  let myPlayer = pick(playerState, userD.user.username);
  

  // console.log('myplayer', myPlayer);
  
  let player = (myPlayer[userD.user.username]);
  // console.log('player',player);

  let stateUpdater = (cardsInHand, card) => {
    equipCards(cardsInHand, card);
    setPlayerState({...playerState, [userD.user.username] : myPlayer[userD.user.username]}) // [userD.user.username] : myPlayer[userD.user.username]
    // console.log('inside state updater',playerState);
     props.updateState();
  };
  
  useEffect( ()=>{
    console.log('myPlayer', myPlayer);
  }, [stateUpdater]);

  return (
    <>
    
            <ul className="cards-in-hand-grid">

            {
              player.cardsInHand.map(card => <li onClick={() => {stateUpdater(player,card)}} key={card.name}><Card className="zoom" style={{ width: '100px' }}>
                    <Card.Img variant="top" src={card.image} />
                </Card></li>
            )
            }
          </ul> 
      
    </>
  );
}

