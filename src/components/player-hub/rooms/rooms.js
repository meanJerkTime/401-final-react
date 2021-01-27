import { NavLink } from 'react-router-dom';
import {React, useEffect, useState } from 'react';
import './rooms.scss';
import io from "socket.io-client";
import { If, Then } from 'react-if';



export default function Landing() {


    let userD = JSON.parse(localStorage.getItem("user login info"));

    const host = 'https://munchkin-game-center.herokuapp.com/games';
    // const host = 'http://localhost:3333';
    
    
    
    const [roomsList, setRoomsList] = useState([]);
 


    useEffect(() => {
        const socket = io(host,{
          query: {
            user:userD.user.username,
          }
        });
        socket.on('RoomList', (roomList)=>{
        console.log('<RoomList>',roomList);
        if(roomList !== undefined){
            setRoomsList([roomList]);
        }
        });
    }, [userD.user.username]);

    console.log(roomsList);



  return (
    <>
        <ul className='top'>
            
                <If condition={roomsList !== undefined}>
                    <Then>
                  { Object.keys(roomsList).map(room =><button>
                        <NavLink to='/game'>
                            <li>{room}</li>
                        </NavLink>
                    </button> 
                    )
                  }
                    </Then>
                </If>
            
        </ul> 
    </>
  );
}
