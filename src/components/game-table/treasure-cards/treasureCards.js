import React from 'react';
import {useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';

import './treasureCards.scss';

export default function TreasureCards() {

  // const equippedCards = useSelector( state => state.game)
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


{/* equippedCards.activeCards.map(card  => <li><Card key={Math.random()} className="zoom" style={{ width: '100px' }}>
      <Card.Img variant="top" src={card.image} />
  </Card></li>
) */}