import { React } from 'react';

import Button from 'react-bootstrap/Button';


export default function CreateRoom(props) {


  return (
    <>
      <div>
        <Button onClick={props.createRoom} variant="outline-dark" size="lg">Create a room</Button>
      </div>
    </>
  );
}