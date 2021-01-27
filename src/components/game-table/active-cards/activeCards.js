import React from 'react';
import {useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';

import './activeCards.scss';

export default function ActiveCards() {

  const equippedCards = useSelector( state => state.game)
  return (
    <>
      <div className="">
      <ul className="active-cards-grid" >
            {
              equippedCards.activeCards.map(card  => <li><Card key={Math.random()} className="zoom" style={{ width: '100px' }}>
                    <Card.Img variant="top" src={card.image} />
                </Card></li>
            )
            }
          </ul> 
      </div>
    </>
  );
}

