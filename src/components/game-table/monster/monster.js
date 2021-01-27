import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
import * as actions from '../../../store/monsterReducer.js'

import './monster.scss';

export default function Monster() {
  const dispatch = useDispatch()
  const monster = useSelector( state => state.monster)

  useEffect(()=> {
    dispatch(actions.getMonster())
  }, [])

  return (
    <>
      <div className="monster-container">
      hello
      <ul>
      {
      monster.monster.slice(0,1).map(item  => <li key={item._id}><Card  className="zoom" style={{ width: '100px' }}>
            <Card.Img variant="top" src={item.image} />
        </Card></li>
      )
      }
      </ul> 
      </div>

    </>
  );
}




