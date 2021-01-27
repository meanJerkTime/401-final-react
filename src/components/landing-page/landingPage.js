import React from 'react';
import LoggedOutNavbar from '../header/navbar/loggedOutNavbar.js';
import Footer from '../footer/footer.js';
import './landingPage.scss';
import { useDispatch} from 'react-redux';
import axios from 'axios';
import * as actions from '../../store/userReducer.js';


export default function Landing() {


  const dispatch = useDispatch();

  function loginDispatch(user) {
    dispatch(actions.loginUser(user));
  }


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
      console.log(resp.data);
      localStorage.setItem("user login info",JSON.stringify(resp.data));
      loginDispatch(resp.data);
      window.location.href = '/playerHub';

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
      <button onClick={handleSubmit}>Login</button>
    </div>
    <Footer/>
    </>
  );
}
