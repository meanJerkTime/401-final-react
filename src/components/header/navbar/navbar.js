import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <NavLink to="/">Home</NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink to='/rules'>Rules</NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/about">About</NavLink>
            
          </Typography>
          <Button id='signUp' color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}