import React, { useState, useEffect } from 'react';


import {useSelector, Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/landing-page/landingPage.js';
import Game from './components/game-table/gameTable.js';
import About from './components/aboutPage/aboutPage.js';
import Rules from './components/rules/rules.js';
import PlayerHub from './components/player-hub/playerHub.js';
import store from './store/store.js';

function App () {
  const user = useSelector( state => state.user);
  console.log(user);


  return (
    <>
      <Provider store={store}>

        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/game' component={Game}/>

            <Route exact path="/about" component={About}/>
            
            <Route exact path="/rules" component={Rules}/>
            <Route exact path="/playerHub" component={PlayerHub}/> 
          </Switch>
        </BrowserRouter>
      </Provider>  
    </>
  );
};

export default App;