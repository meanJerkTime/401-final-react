import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';

import * as actions from '../../../store/treasureReducer.js'


import './treasureCards.scss';

export default function TreasureCards() {

  // const equippedCards = useSelector(state => state.game)
  const dispatch = useDispatch();

  const getTreasureCards = () => {
    dispatch(actions.treasureDeck())
  }

  let cards = getTreasureCards();
  console.log(cards.data);
  return (
    <>
      <div className="">
      <ul className="treasure-cards-grid" >
            
              <li className="deck">Treasure Draw Deck</li>
              <li className="deck">Treasure Discard Deck</li>
            
          </ul> 
      </div>
    </>
  );
}


// equippedCards.activeCards.map(card  => <li><Card key={Math.random()} className="zoom" style={{ width: '100px' }}>
//       <Card.Img variant="top" src={card.image} />
//   </Card></li>
// )