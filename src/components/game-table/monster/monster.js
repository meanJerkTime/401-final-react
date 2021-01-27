import React from 'react';
import {useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
import './monster.scss';

export default function Monster() {
  
  const monster = useSelector( state => state.monster)
  // const monster1 = monster[0]
  console.log(monster)
  return (
    <>
      <div className="monster-container">
      hello
      {/* <ul id='' >
      </ul>  */}
      </div>

    </>
  );
}

// {
//   monster.monster.map(item  => <li><Card key={Math.random()} className="zoom" style={{ width: '100px' }}>
//         <Card.Img variant="top" src={item.image} />
//         <li>{item.id}</li>
//         <li>{item.name}</li>
//     </Card></li>
// )
// }


