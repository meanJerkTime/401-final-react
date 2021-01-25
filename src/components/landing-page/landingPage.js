import React from 'react';
import Navbar from '../header/navbar/navbar.js';
import Footer from '../footer/footer.js';
import './landingPage.scss';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

export default function Landing() {
  
  const loginData = Object.freeze({
    username: "",
    password: ""
  });
  
  const [formData, updateFormData] = React.useState(loginData);

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
    axios({
      method:'post',
      url:'https://munchkin-auth.herokuapp.com/signin',
      auth: {
        username:formData.username,
        password:formData.password
      }
    })
    .then((response) => {
      console.log(response);
      window.location.href = "/playerHub";

    }, (error) => {
      console.log(error);
    });
    
  };

  return (
    <>
    <Navbar/>
      <div>
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
            <button onClick={handleSubmit}>Login</button>
        </div>
      <Footer/>
    </>
  );
}


