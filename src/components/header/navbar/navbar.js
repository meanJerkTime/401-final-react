import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => {

  const initialFormData = Object.freeze({
    username: "",
    password: ""
  });

  const [formData, updateFormData] = React.useState(initialFormData);
  
  const handleChange = (e) => {
    updateFormData({
      ...formData,
  
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    
  };
  
  return (
    <>
      <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to='/rules'>Rules</NavLink>
      
        <div className="dropdown">
          <button className="dropbtn">Signup
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
          <label>
              Username
        <input name="username" onChange={handleChange} />
            </label>
            <br />
            <label>
              Password
        <input name="password" onChange={handleChange} />
            </label>
            <br />
            <button onClick={handleSubmit}>Submit</button>
              
          </div>
        </div> 
        <NavLink to="/about">About</NavLink>
      </div>

      
    </>




   
  );
}

export default Navbar;