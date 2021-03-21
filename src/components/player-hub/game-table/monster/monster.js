import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
import * as actions from '../../../../store/monsterReducer.js'
import { combat } from '../../../../game-objects/game-engine.js';
import { If, Then, Else } from 'react-if';

import './monster.scss';

export default function Monster(props) {
 
  let userD = JSON.parse(localStorage.getItem("user login info")); // current player

  const [turnFinished, setTurnFinished] = useState(false);

  let unshuffledDoorDeck = props.localGameState.doorCardDeck;

  function fightMonster() {
    
    let updatePlayer = combat(props.localGameState[userD.user.username], unshuffledDoorDeck.slice(0,1));
    props.newState({...props.localGameState, [userD.user.username] : updatePlayer});
    setTurnFinished(true);
  }
  useEffect(() => {
    if(turnFinished) {
      props.nextTurn();
    }
  }, [turnFinished]);


  useEffect(() => {
    console.log('this is whose turn from monster:',props.localGameState.whosTurn);
  }, [props.localGameState]);

  return (
    <>
      <div className="monster-container">
    
      {
        unshuffledDoorDeck.slice(0,1).map(item  => (
          <li id="monster-card" key={item._id}>
            <Card >
              <Card.Img variant="top" src={item.image} />
            </Card>
          </li>
        ))
      }
      <If condition={props.localGameState.whosTurn === userD.user.username}>
        <Then>
          <button id="fight-monster-button" onClick={() => fightMonster()}>Fight monster</button>
        </Then>
      </If>
      
      </div>

    </>
  );
};



