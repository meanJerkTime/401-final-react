import { React, useState, useEffect, useRef } from 'react';
import { If, Then } from 'react-if';
import io  from "socket.io-client";

import LoggedInNavbar from '../header/navbar/loggedInNavbar.js';
import Footer from '../footer/footer.js';
import './playerHub.scss';
import Rooms from './rooms/rooms.js';
import CreateRoom from './create-a-room/createRoom.js';

export default function PlayerHub() {
    
  let userD = JSON.parse(localStorage.getItem("user login info"));

  const host = 'https://munchkin-game-center.herokuapp.com/games';
  // const host = 'http://localhost:3333';
  
  const [roomDetail, setRoomDetail] = useState({});
  const [roomsList, setRoomsList] = useState({});

  const socket = useRef();

  

  function joinRoom(room) {
    socket.current.emit('Join', room);
    window.location.href = '/game';
    console.log(room);
  }

  function createRoom() {
    socket.current.emit("CreateRoom", userD.user.username);
    window.location.href = '/game';
  }


  useEffect(() => {
     socket.current = io(host,{
        query: {
          user:userD.user.username,
        }
      });
      socket.current.on('NewRoomCreated', (gameRoomInfo)=>{
        setRoomsList(gameRoomInfo);
      // console.log('gameroom info',gameRoomInfo);
      console.log('<NewRoomCreated>',gameRoomInfo);
      });

      socket.current.on('NewJoin', (payload)=>{

        console.log('<NewJoin>',payload);
        
        setRoomDetail(payload)
      });
      socket.current.on('RoomList', (roomList)=>{
      console.log('<RoomList>',roomList);
      if(roomList !== undefined){
          setRoomsList(roomList);
      }
      });
  }, [userD.user.username]);

  console.log(roomsList);
  console.log(roomDetail);

  return (
    <>

      <If condition={userD.token}>
        <Then>
        <LoggedInNavbar/>
        <h1>PlayerHub</h1>
        <div className='playerHub'>
            <Rooms joinRoom={joinRoom} values={roomsList} className='top'/>
            <CreateRoom createRoom={createRoom} setRoomDetail={setRoomDetail} className='bottom'/>
            {
              Object.keys(roomDetail).length !== 0 &&
                (<div>
                  <ul>
                    {
                      roomDetail.currentPlayers.map((player) =>
                        <li key={Math.random()}>{player.username}</li>
                      )
                    }
                  </ul>
                </div>)
            }
        </div>
      <Footer/>
        </Then>
      </If>
       
    </>
  );
}


