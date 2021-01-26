import {React, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function CreateRoom() {
  
  // const host = 'https://munchkin-game-center.herokuapp.com/games';

  let userD = JSON.parse(localStorage.getItem("user login info"));

  console.log(userD);
  
  // const socket = io(host);


  
//   useEffect(() => {
//     const socket = io(host,{query:`user=${userD.user.username}---${userD.token}`});
//     socket.on('CreateRoom', (room)=>{
//     console.log('<Created>',room);
//     });
// }, []);

  // const createRoom = () => {
  //   socket.emit('CreateRoom', userD.username);
  // };

  return (
    <>
        <button>Create a room</button>
    </>
  );
}