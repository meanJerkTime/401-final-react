import React from 'react';
import Navbar from '../header/navbar/navbar.js';
import Footer from '../footer/footer.js';
import './aboutPage.scss';
export default function aboutPage() {
  return (
    <div>
      <Navbar/>
      <div className="about-page">
        <div className="card-front"></div>
        <div className="card-back">
            <h2>Jane Doe<br /><span>Senior Designer</span></h2>
            <div className="social-icons">
                <a href="#" className="fa fa-facebook" aria-hidden="true"></a>
                <a href="#" className="fa fa-twitter" aria-hidden="true"></a>
                <a href="#" className="fa fa-google-plus" aria-hidden="true"></a>
                <a href="#" className="fa fa-linkedin" aria-hidden="true"></a>
                <a href="#" className="fa fa-instagram" aria-hidden="true"></a>
            </div>
        </div>
    </div>
      <Footer/>
    </div>
  )
}

 