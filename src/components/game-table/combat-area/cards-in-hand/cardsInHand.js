import React from 'react';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../../../store/gameTableReducer.js'

import './cardsInHand.scss';



export default function CardsInHand() {

  const cards = useSelector( state => state.game)
  const dispatch = useDispatch()
  
  const equipCard = () => {
    console.log('boobies')
    // dispatch(actions.increment());
  }

  return (
    <>
      <div className="cards-in-hand">
            <ul id='cards' >
            {
              cards.cards.map(card  => <li onClick={equipCard}><Card key={Math.random()} className="zoom" style={{ width: '100px' }}>
                    <Card.Img variant="top" src={card.image} />
                </Card></li>
            )
            }
          </ul> 
      </div>
    </>
  );
}

