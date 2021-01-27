import React from 'react';
import LoggedInNavbar from '../header/navbar/loggedInNavbar.js';
import Footer from '../footer/footer.js';
import './aboutPage.scss';
export default function aboutPage() {
  return (
    <div>
      <LoggedInNavbar/>
     
<section>

    <div className="aboutCard">
        <p>Diane Stephani<br /><span>Game Logic</span></p>
    </div>

{/* Backend */}
    <div className="aboutCard">
        <p>Peng Chen<br /><span>Backend</span></p>
    </div>

{/* Game Logic */}
    <div className="aboutCard">
    <p>Joe Pennock<br /><span>Game Logic</span></p>
    </div>

    <div className="aboutCard">
    <p>Kory Jackson<br /><span>Game Logic</span></p>
    </div>


{/* UI/UX */}
    <div className="aboutCard">
    <p>Brendon Hampton<br /><span>UI/UX</span></p>
    </div>

    <div className="aboutCard">
    <p>Edgar Romero<br /><span>UI/UX</span></p>
    </div>

    <div className="aboutCard">
    <p>Chris Bortel<br /><span>UI/UX</span></p>
    </div>



    </section>

    <Footer/>
    </div>
)
}
