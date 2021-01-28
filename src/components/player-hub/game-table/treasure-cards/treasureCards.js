import React from 'react';
import {useDispatch} from 'react-redux';
// import Card from 'react-bootstrap/Card';

import * as actions from '../../../../store/treasureReducer.js'


import './treasureCards.scss';

export default function TreasureCards() {

  // const equippedCards = useSelector(state => state.game)
  const dispatch = useDispatch();

  const getTreasureCards = () => {
    dispatch(actions.treasureDeck())
  }

  let cards = getTreasureCards();
  console.log(cards);
  return (
    <>
      <div className="">
      <ul className="treasure-cards-grid" >
            
              <li className="treasure-deck">Treasure Draw Deck</li>
              <li className="treasure-deck">Treasure Discard Deck</li>
            
          </ul> 
      </div>
    </>
  );
}




