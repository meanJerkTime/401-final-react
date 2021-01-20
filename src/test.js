import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

let socket;

function EventTest () {
  const ENDPOINT = 'localhost:5000';
  socket = io(ENDPOINT);

  function handleClick () {
    socket.emit('test');
  }

  return (
    <>
      <button onClick={ () => handleClick() } >click me</button>
    </>
  );

}

export default EventTest;