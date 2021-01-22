import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

let socket;

function EventTest () {
  const ENDPOINT = 'js401-final-test-server.herokuapp.com';
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