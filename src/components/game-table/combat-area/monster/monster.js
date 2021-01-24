import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
import './monster.scss';

export default function Monster() {
  
  const monster = useSelector( state => state.monster)
  return (
    <>
      <div id="">
      <ul id='' >
            {
              monster.monster.map(item  => <li><Card key={Math.random()} className="zoom" style={{ width: '100px' }}>
                    <Card.Img variant="top" src={item.image} />
                    <li>{item.id}</li>
                    <li>{item.name}</li>
                </Card></li>
            )
            }
          </ul> 
      </div>
    </>
  );
}



