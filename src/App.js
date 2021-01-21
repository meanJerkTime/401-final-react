import GameTable from './components/game-table/gameTable.js';
import Navbar from './components/header/navbar/navbar.js';
import Footer from './components/footer/footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <GameTable />
      <Footer />
    </>
  );
}

export default App;
