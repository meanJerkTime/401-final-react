import React from 'react';
import LoggedInNavbar from '../header/navbar/loggedInNavbar.js';
import Footer from '../footer/footer.js';
import './rules.scss';

export default function Rules() {

  return (
    <>
        <LoggedInNavbar/>
        <div className='rules'>
            <h1>Rules</h1>
        </div>
      <Footer/>
    </>
  );
}

