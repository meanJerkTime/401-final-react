import React from 'react';
import Navbar from '../header/navbar/navbar.js';
import Footer from '../footer/footer.js';
import './playerHub.scss';
import Rooms from './rooms/rooms.js';
import CreateRoom from './create-a-room/createRoom.js';

export default function PlayerHub() {

  return (
    <>
        <Navbar/>
        <div className='playerHub'>
            <Rooms className='top'/>
            <CreateRoom className='bottom'/>
        </div>
      <Footer/>
    </>
  );
}


