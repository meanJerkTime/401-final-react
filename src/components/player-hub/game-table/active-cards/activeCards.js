import React, { useState } from 'react';
// import {useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
// import { pick } from 'lodash';

import './activeCards.scss';


export default function ActiveCards(props) {
  
  let userD = JSON.parse(localStorage.getItem("user login info"));
  const [cardsEquipped, setCardsEquipped] = useState(props.localGameState);
  console.log('ActiveCards',props.localGameState);

  let equipment = props.localGameState[userD.user.username].cardsEquipped;

  return (
    <>
      <div className="">
      <ul className="active-cards-grid" >
            {
<<<<<<< HEAD
              equippedCards.activeCards.map(card  => <li><Card key={Math.random()} className="zoom" style={{ width: '6vw' }}>
                    <Card.Img variant="top" src={card.image} />
=======
              equipment.map(card  => <li key={Math.random()}><Card  className="zoom" style={{ width: '100px' }}>
                <Card.Img variant="top" src={card.image} />
>>>>>>> 838dc8f8c721ce85bcb8be533258fe75ce36654a
                </Card></li>
            )
            }
          </ul> 
      </div>
    </>
  );
};

