import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
import * as actions from '../../../../store/monsterReducer.js'
import { combat } from '../../../../game-objects/game-engine.js';
import { If, Then, Else } from 'react-if';

import './monster.scss';

export default function Monster(props) {
 
  let userD = JSON.parse(localStorage.getItem("user login info")); // current player
  let unshuffledDoorDeck = props.localGameState.doorCardDeck;

  console.log(props.localGameState.whosTurn);

  function fightMonster() {
    
    // console.log(props.localGameState[userD.user.username]);
    combat(props.localGameState[userD.user.username], unshuffledDoorDeck.slice(0,1));
  }

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
          <button onClick={fightMonster}>Fight monster</button>
        </Then>
      </If>
      
      </div>

    </>
  );
};



