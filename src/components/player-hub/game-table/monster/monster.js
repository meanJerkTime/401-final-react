import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
import * as actions from '../../../../store/monsterReducer.js'
import { combat } from '../../../../game-objects/game-engine.js';
import { If, Then, Else } from 'react-if';

import './monster.scss';

export default function Monster(props) {
 
  let userD = JSON.parse(localStorage.getItem("user login info")); // current player

  const [monsterState, setMonsterState] = useState(props.localGameState);

  let unshuffledDoorDeck = monsterState.doorCardDeck;

  function fightMonster() {
    
   let test = combat(monsterState[userD.user.username], unshuffledDoorDeck.slice(0,1));
    setMonsterState({...monsterState, [userD.user.username] : test[userD.user.username] });
    props.updateState();
    props.nextTurn();

  }

  useEffect( ()=>{
    props.newState(props.localGameState)
  }, [fightMonster]);

  return (
    <>
      <div className="monster-container">
    
      {
        unshuffledDoorDeck.slice(0,1).map(item  => (
          <li key={item._id}>
            <Card style={{ width: '100px' }}>
              <Card.Img variant="top" src={item.image} />
            </Card>
          </li>
        ))
      }
      <If condition={props.localGameState.whosTurn === userD.user.username}>
        <Then>
          <button onClick={() => fightMonster()}>Fight monster</button>
        </Then>
      </If>
      
      </div>

    </>
  );
};



