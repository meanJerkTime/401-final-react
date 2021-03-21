import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import './navbar.scss';

const LoggedOutNavbar = () => {

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
    axios.post('https://munchkin-auth.herokuapp.com/signup', {
      username: formData.username,
      password: formData.password
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
  
  return (
    <>
      <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to='/rules'>Rules</NavLink>
      <NavLink to="/about">About</NavLink>
        <div className="dropdown">
          <button className="dropbtn">Signup
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
          <label>
            <input name="username" onChange={handleChange} placeholder= "Username" />
          </label>
              <br />
          <label>
            <input name="password" type="password" onChange={handleChange} placeholder="Password"/>
          </label>
              <br />
            <button onClick={handleSubmit}>Submit</button>  
          </div>
        </div> 
        
      </div>
    </>




   
  );
}

export default LoggedOutNavbar;