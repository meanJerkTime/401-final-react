import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
import * as actions from '../../../store/gameTableReducer.js'

import './cardsInHand.scss';



export default function CardsInHand() {

  const cards = useSelector( state => state.game.cards)
  const dispatch = useDispatch()
  
  function handleDispatch(card) {
    dispatch(actions.activateCard(card))
    dispatch(actions.removeCardFromHand(card))
  }

  useEffect(()=> {
    dispatch(actions.getCardsInHand())
  }, [])

  return (
    <>
    
            <ul className="cards-in-hand-grid">
            {
              cards.slice(0,5).map(card  => <li key={card._id} onClick={() => handleDispatch(card)}><Card className="zoom" style={{ width: '7vw' }}>
                    <Card.Img variant="top" src={card.image} />
                </Card></li>
            )
            }
          </ul> 
      
    </>
  );
}

