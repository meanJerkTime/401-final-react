import GameTable from './components/game-table/gameTable.js';
import Navbar from './components/header/navbar/navbar.js';
import Footer from './components/footer/footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/aboutPage/aboutPage.js';
import aboutPage from './components/aboutPage/aboutPage.js';
// import Navigation from './components/Navigation';

function App() {
  return (
    <>


      <BrowserRouter>
      <Navbar />
        <div>
          {/* <Navigation /> */}
          <Switch>
            <Route path="/about" component={About}/>
          </Switch>
        </div>
      </BrowserRouter>
      <GameTable />
      <Footer />
    </>
  );
}

export default App;
