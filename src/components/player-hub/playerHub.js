import React from 'react';
import LoggedInNavbar from '../header/navbar/loggedInNavbar.js';
import Footer from '../footer/footer.js';
import './playerHub.scss';
import Rooms from './rooms/rooms.js';
import CreateRoom from './create-a-room/createRoom.js';

export default function PlayerHub(props) {
    console.log(props);
  return (
    <>
        <LoggedInNavbar/>
        <h1>PlayerHub</h1>
        <div className='playerHub'>
            <Rooms className='top'/>
            <CreateRoom className='bottom'/>
        </div>
        <button onClick={props.handleLogout}>Log Out</button>
      <Footer/>
    </>
  );
}


