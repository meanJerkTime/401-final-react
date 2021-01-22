import React from 'react';
import Navbar from '../header/navbar/navbar.js';
import Footer from '../footer/footer.js';
import './landingPage.scss';

export default function Landing() {
  return (
    <>
        <Navbar/>
        <div className='landingPage'>
            <h1>Landing Page</h1>
        </div>
      <Footer/>
    </>
  );
}


