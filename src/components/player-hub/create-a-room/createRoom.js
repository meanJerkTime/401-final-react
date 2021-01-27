import {React, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function CreateRoom() {
  
  const host = 'https://munchkin-game-center.herokuapp.com/games';
  // const host = 'http://localhost:3333';

  let userD = JSON.parse(localStorage.getItem("user login info"));

  const socket = io(host);

  function CreateRoom(socket) {
    console.log('test');
    socket.emit("CreateRoom", userD.user.username);

}

  
  return (
    <>
        <button onClick={()=>CreateRoom(socket)}>Create a room</button>
    </>
  );
}