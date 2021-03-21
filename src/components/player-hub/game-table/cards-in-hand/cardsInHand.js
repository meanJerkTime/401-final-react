import {React, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
import * as actions from '../../../../store/gameTableReducer.js';
import { pick } from 'lodash';
import { equipCards } from '../../../../game-objects/game-engine.js'; 

import './cardsInHand.scss';



export default function CardsInHand(props) {

  let userD = JSON.parse(localStorage.getItem("user login info"));
  
  const [activateCard, setActiveCard] = useState(false);


  // console.log('player state',playerState);

  
  let myPlayer = pick(props.localGameState, userD.user.username);
  console.log('myPlayer', myPlayer);
  
  let player = (myPlayer[userD.user.username]);
  

  let stateUpdater = (cardsInHand, card) => {
    equipCards(cardsInHand, card);
    props.newState({...props.localGameState, [userD.user.username] : myPlayer[userD.user.username]}) // [userD.user.username] : myPlayer[userD.user.username]
    // console.log('inside state updater',playerState);
     props.updateState();
  };
  

  return (
    <>
    
            <ul className="cards-in-hand-grid">

            {
              player.cardsInHand.map(card => <li onClick={() => {stateUpdater(player,card)}} key={card._id}><Card className="zoom" style={{ width: '150px' }}>
                    <Card.Img variant="top" src={card.image}  />
                </Card></li>
            )
            }
          </ul> 
      
    </>
  );
}

