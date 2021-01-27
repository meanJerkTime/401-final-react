import {React, useEffect, useState, useCallback } from 'react';
import io from 'socket.io-client';

export default function CreateRoom(props) {


  return (
    <>
        <button onClick={props.createRoom}>Create a room</button>
    </>
  );
}