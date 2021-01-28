import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
import { pick } from 'lodash';

import './activeCards.scss';

let userD = JSON.parse(localStorage.getItem("user login info"));

export default function ActiveCards(props) {

  let equipment = props.localGameState[userD.user.username].cardsEquipped;
  const [cardsEquipped, setCardsEquipped] = useState([]);
  // console.log('ActiveCards',props.localGameState);

  
  // setCardsEquipped([...cardsEquipped, props.localGameState[userD.user.username].cardsEquipped])
  

  return (
    <>
      <div className="">
      <ul className="active-cards-grid" >
            {
              cardsEquipped.map(card  => <li key={Math.random()}><Card  className="zoom" style={{ width: '100px' }}>
                    <Card.Img variant="top" src={card.image} />
                </Card></li>
            )
            }
          </ul> 
      </div>
    </>
  );
}

