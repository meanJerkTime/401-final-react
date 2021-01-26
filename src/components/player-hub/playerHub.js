import React from 'react';
import { If, Then, Else } from 'react-if';

import LoggedInNavbar from '../header/navbar/loggedInNavbar.js';
import Footer from '../footer/footer.js';
import './playerHub.scss';
import Rooms from './rooms/rooms.js';
import CreateRoom from './create-a-room/createRoom.js';

export default function PlayerHub() {
    
    let userD = JSON.parse(localStorage.getItem("user login info"));
    console.log(userD.token);

  return (
    <>

      <If condition={userD.token}>
        <Then>
        <LoggedInNavbar/>
        <h1>PlayerHub</h1>
        <div className='playerHub'>
            <Rooms className='top'/>
            <CreateRoom className='bottom'/>
        </div>
        <button>Log Out</button>
      <Footer/>
        </Then>
      </If>
       
    </>
  );
}


