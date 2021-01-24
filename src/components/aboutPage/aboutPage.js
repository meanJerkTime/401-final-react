import React from 'react';
import Navbar from '../header/navbar/navbar.js';
import Footer from '../footer/footer.js';
import './aboutPage.scss';
export default function aboutPage() {
  return (
    <div>
      <Navbar/>
     
<section>

      <div className="card">
        <div className="card-front"></div>
        <div className="card-back">
            <h4>Diane Stephani<br /><span>Game Logic</span></h4>
            <div className="social-icons">
                <a href="#" className="fab fa-github" aria-hidden="true"></a>
                <a href="#" className="fa fa-twitter" aria-hidden="true"></a>
                <a href="#" className="fa fa-linkedin" aria-hidden="true"></a>
            </div>
        </div>
    </div>

{/* Backend */}
<div className="card">
        <div className="card-front"></div>
        <div className="card-back">
            <h4>Peng Chen<br /><span>Backend</span></h4>
            <div className="social-icons">
                <a href="#" className="fab fa-github" aria-hidden="true"></a>
                <a href="#" className="fa fa-twitter" aria-hidden="true"></a>
                <a href="#" className="fa fa-linkedin" aria-hidden="true"></a>
            </div>
        </div>
    </div>

{/* Game Logic */}
    <div className="card">
        <div className="card-front"></div>
        <div className="card-back">
            <h4>Joe Pennock<br /><span>Game Logic</span></h4>
            <div className="social-icons">
                <a href="#" className="fab fa-github" aria-hidden="true"></a>
                <a href="#" className="fa fa-twitter" aria-hidden="true"></a>
                <a href="#" className="fa fa-linkedin" aria-hidden="true"></a>
            </div>
        </div>
    </div>

    <div className="card">
        <div className="card-front"></div>
        <div className="card-back">
            <h4>Kory Jackson<br /><span>Game Logic</span></h4>
            <div className="social-icons">
                <a href="#" className="fab fa-github" aria-hidden="true"></a>
                <a href="#" className="fa fa-twitter" aria-hidden="true"></a>
                <a href="#" className="fa fa-linkedin" aria-hidden="true"></a>
            </div>
        </div>
    </div>


{/* UI/UX */}
    <div className="card">
        <div className="card-front"></div>
        <div className="card-back">
            <h4>Brendon Hampton<br /><span>UI/UX</span></h4>
            <div className="social-icons">
                <a href="#" className="fab fa-github" aria-hidden="true"></a>
                <a href="#" className="fa fa-twitter" aria-hidden="true"></a>
                <a href="#" className="fa fa-linkedin" aria-hidden="true"></a>
            </div>
        </div>
    </div>

    <div className="card">
        <div className="card-front"></div>
        <div className="card-back">
            <h4>Edgar Romero<br /><span>UI/UX</span></h4>
            <div className="social-icons">
                <a href="#" className="fab fa-github" aria-hidden="true"></a>
                <a href="#" className="fa fa-twitter" aria-hidden="true"></a>
                <a href="#" className="fa fa-linkedin" aria-hidden="true"></a>
            </div>
        </div>
    </div>

    <div className="aboutCard">
        <div className="card-front"></div>
        <div className="card-back">
            <h4>Chris Bortel<br /><span>UI/UX</span></h4>
            <div className="social-icons">
                <a href="#" className="fab fa-github" aria-hidden="true"></a>
                <a href="#" className="fa fa-twitter" aria-hidden="true"></a>
                <a href="#" className="fa fa-linkedin" aria-hidden="true"></a>
            </div>
        </div>
    </div>



    </section>

    <Footer/>
    </div>
)
}

