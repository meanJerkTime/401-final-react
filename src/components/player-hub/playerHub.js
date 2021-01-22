import React from 'react';
import Navbar from '../header/navbar/navbar.js';
import Footer from '../footer/footer.js';
import './playerHub.scss';

export default function Landing() {

  return (
    <>
        <Navbar/>
        <div className='playerHub'>
            <h1 className='top'>Rooms</h1>
            <h1 className='bottom'>Create a room</h1>
        </div>
      <Footer/>
    </>
  );
}


