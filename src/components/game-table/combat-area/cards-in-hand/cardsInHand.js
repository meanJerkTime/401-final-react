import React from 'react';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from 'react-redux';
import './cardsInHand.scss';

export default function CardsInHand() {

  const cards = useSelector( state => state.game)
  console.log(cards)
  return (
    <>
      <div className="cards-in-hand">
            <ul id='cards'>
            {
              cards.cards.map(card => <Card className="zoom" style={{ width: '100px' }}>
                    <Card.Img variant="top" src={card.image} />
                </Card>
            )
            }
          </ul> 
      </div>
    </>
  );
}

