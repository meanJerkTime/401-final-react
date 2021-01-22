
import Landing from './components/landing-page/landingPage.js';
import Game from './components/game-table/gameTable.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './components/aboutPage/aboutPage.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/game' component={Game}/>
          <Route path="/about" component={About}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
