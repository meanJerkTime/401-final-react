import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

import './navbar.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Navbar() {
  const classes = useStyles();
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
            <form>
              <label for='username'>Username</label>
              <input type='text' id='username' name='username'/>
              <label for='password'>Password</label>
              <input type='password' id='password' name='password'/>
            </form>
            <button>Submit</button>
          </div>
        </div> 
        <NavLink to="/about">About</NavLink>
      </div>
    </>




   
  );
}