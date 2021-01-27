import React from 'react';
import {useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';

import './doorCards.scss';

export default function DoorCards() {

  // const equippedCards = useSelector( state => state.game)
  return (
    <>
      <div className="">
      <ul className="door-cards-grid" >
            
              <li className="door-deck-draw">Door Draw Deck</li>
              <li className="door-deck-discard">Door Discard Deck</li>
            
          </ul> 
      </div>
    </>
  );
}


{/* equippedCards.activeCards.map(card  => <li><Card key={Math.random()} className="zoom" style={{ width: '100px' }}>
      <Card.Img variant="top" src={card.image} />
  </Card></li>
) */}