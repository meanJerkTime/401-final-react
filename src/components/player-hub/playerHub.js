import { React, useState, useEffect, useRef } from 'react';
import { If, Then } from 'react-if';
import io from "socket.io-client";

import LoggedInNavbar from '../header/navbar/loggedInNavbar.js';
import Footer from '../footer/footer.js';
import './playerHub.scss';
import Rooms from './rooms/rooms.js';
import CreateRoom from './create-a-room/createRoom.js';
import GameTable from './game-table/gameTable.js';

export default function PlayerHub() {
    
  let userD = JSON.parse(localStorage.getItem("user login info"));

  const host = 'https://munchkin-game-center.herokuapp.com/games';
  // const host = 'http://localhost:3333';
  
  const [roomDetail, setRoomDetail] = useState({});
  const [roomsList, setRoomsList] = useState({});
  const [localGameState, setGameState] = useState({});

  const socket = useRef();


  function joinRoom(room) {
    socket.current.emit('Join', room);
    
    console.log(room);
  }

  function createRoom() {
    socket.current.emit("CreateRoom", userD.user.username);
    ;
  }

  function startGame() {
    setTimeout(()=>{
      socket.current.emit('InitGame', {roomOwner: userD.user.username, players:roomDetail.currentPlayers});
      let localWinner = undefined;
    },15000);
  }

 

  useEffect(() => {
    console.log(localGameState)

  }, [localGameState]); 
  useEffect(() => {
     socket.current = io(host,{
        query: {
          user:userD.user.username,
        }
      });

      socket.current.on('InitialCards', (gameState)=>{
        setGameState(gameState);
      
      });

      socket.current.on('UpdateLocalGameState', (gameState)=> {

        setGameState(gameState);
        console.log('updated state', localGameState);
      
      });

      socket.current.on('NewRoomCreated', (gameRoomInfo)=>{
        setRoomsList(gameRoomInfo);
        if(gameRoomInfo[userD.user.username]) {
          setRoomDetail(gameRoomInfo[userD.user.username]);
        }

      // console.log('gameroom info',gameRoomInfo);
      console.log('<NewRoomCreated>',gameRoomInfo);
      });

      socket.current.on('NewJoin', (payload)=>{

        console.log('<NewJoin>',payload);
        
        setRoomDetail(payload.roomStatus);
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
          {
            Object.keys(roomDetail).length === 0 &&
            (
              <div>
                <Rooms joinRoom={joinRoom} values={roomsList} className='top'/>
                <CreateRoom createRoom={createRoom} setRoomDetail={setRoomDetail} className='bottom'/>
              </div>
            )
          }
            {
              Object.keys(roomDetail).length !== 0 &&
                Object.keys(localGameState).length === 0 &&

                (<div>
                  <ul>
                    {
                      
                        roomDetail.currentPlayers.map((player) => 
                        <div>
                          <li key={Math.random()}>{player.username}</li>
                        </div>
                      )
                    }
                  </ul>
                  <button onClick={startGame}>Start Game</button>
                </div>)
            }
            {
              Object.keys(localGameState).length > 0 &&
                <GameTable roomDetail={roomDetail} localGameState={localGameState}/>
            }
        </div>
      <Footer/>
        </Then>
      </If>
       
    </>
  );
}

