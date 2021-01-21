import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './cardsInHand.scss';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
    </Tooltip>
  );

export default function CardsInHand() {
  return (
    <>
      <div className="cards-in-hand">
            <ul id='cards'>
            {
            cards.map(card => <OverlayTrigger placement="top" delay={{show:250, hide:400}} overlay={renderTooltip}><button><Card style={{ width: '100px' }}>
            <Card.Img variant="top" src={card.image} />
            </Card></button></OverlayTrigger>
            )
            }
          </ul> 
      </div>
    </>
  );
}

const cards = [
    {
      name: "Card 1",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 24
    },
    {
      name: "Card 2",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 26
    },
    {
      name: "Card 3",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 26
    },
    {
      name: "Card 4",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 26
    },
    {
      name: "card 5",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 26
    }
  ]