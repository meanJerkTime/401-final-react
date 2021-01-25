import React, { useState } from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/landing-page/landingPage.js';
import Game from './components/game-table/gameTable.js';
import About from './components/aboutPage/aboutPage.js';
import Rules from './components/rules/rules.js';
import PlayerHub from './components/player-hub/playerHub.js';
import ProtectedRoute from './components/protected-route/protectedRoute.js';
import Unauthorized from './components/unauthorized/unauthorized.js';


function App () {

  const [user, setUser] = useState(false);

  // pass the user to the landing page to set it to true after handleSubmit
  const handleLogin = e => {
    e.preventDefault();
    setUser(true);
  }

  const handleLogout = e => {
    e.preventDefault();
    setUser(false);
  }

  return (
    <>

      <BrowserRouter>
        <Switch>
        <Route exact path='/' handleLogin={handleLogin} render={props => <Landing {...props} user={user.toString()} />} />
          <Route exact path='/game' component={Game}/>
          <Route path="/about" component={About}/>
          <Route path="/rules" component={Rules}/>
          <ProtectedRoute path="/playerHub" handleLogout={handleLogout} user={user} component={PlayerHub}/>
          <Route exact path='/unauthorized' component={Unauthorized} />
        </Switch>
      </BrowserRouter>
    </>

  );
};

export default App;