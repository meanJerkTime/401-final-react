import { React } from 'react';

import Button from 'react-bootstrap/Button';


export default function CreateRoom(props) {


  return (
    <>
      {/* <button className='roomCreate' onClick={props.createRoom}>Create a room</button> */}
      <div>
        <Button variant="outline-dark" size="lg">Create a room</Button>
      </div>
    </>
  );
}