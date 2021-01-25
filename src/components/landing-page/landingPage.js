import React from 'react';
import LoggedOutNavbar from '../header/navbar/loggedOutNavbar.js';
import Footer from '../footer/footer.js';
import './landingPage.scss';
import axios from 'axios';


export default function Landing(props) {

  const loginData = Object.freeze({
    username: "",
    password: ""
  });

  const [formData, updateFormData] = React.useState(loginData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim()
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData);
    try { 
      const resp = await axios({
      method: 'post',
      url: 'https://munchkin-auth.herokuapp.com/signin',
      auth: {
        username: formData.username,
        password: formData.password
      }
    })
    if(resp.status === 200) {
      console.log(resp);
      window.location.href = "/playerHub";
    }
  } catch (err) {
      console.log(err);
  }
      

  };


  return (
    <>
    <LoggedOutNavbar/>
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
      <button onClick={handleSubmit, props.handleLogin}>Login</button>
    </div>
    <Footer/>
    </>
  );
}














{/* <div>
      <h1>Landing</h1>
      <p><Link to='/playerHub'>View Dashboard</Link></p>
      <p>Logged in status: {props.user}</p>
      <button onClick={props.handleLogin}>Log In</button>
    </div> */}