import React from 'react';
// import Navbar from '../header/navbar/navbar.js';
// import Footer from '../footer/footer.js';
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
    axios.post('https://munchkin-auth.herokuapp.com/signin', {
      username: formData.username,
      password: formData.password
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    
  };

  return (
    <>
    {/* <Navbar/> */}
      <div className="landing-grid-container">
      <div className="landing-page">
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
            <NavLink to='/playerHub'><button onClick={handleSubmit}>Login</button></NavLink>
        </div>
        </div>
      {/* <Footer/> */}
    </>
  );
}


