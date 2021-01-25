import React from 'react';
import Navbar from '../header/navbar/navbar.js';
import Footer from '../footer/footer.js';
import './rules.scss';

export default function Rules() {

  return (
    <>
        <Navbar/>
        <div className='rules'>
            <h1>Rules</h1>
        </div>
      <Footer/>
    </>
  );
}

