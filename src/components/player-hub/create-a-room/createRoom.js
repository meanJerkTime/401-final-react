import {React, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function CreateRoom() {
  
  // const host = 'https://munchkin-game-center.herokuapp.com/games';

  // let userD = JSON.parse(localStorage.getItem("user login info"));

  // console.log(userD);
  
  // const socket = io(host);
  // socket.emit('CreateRoom', userD.user.username);

  return (
    <>
        <button>Create a room</button>
    </>
  );
}