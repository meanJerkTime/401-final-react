import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

const LoggedInNavbar = () => {

  function clearLocalStorage() {
    localStorage.clear();
}
  return (
    <>
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to='/rules'>Rules</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/" onClick={clearLocalStorage}>Logout</NavLink>
      </div> 
    </>




   
  );
}

export default LoggedInNavbar;