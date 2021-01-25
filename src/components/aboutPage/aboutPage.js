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



// {/* <div className="card">
//         <div className="card-front"></div>
//         <div className="card-back">
//             <h4>Diane Stephani<br /><span>Game Logic</span></h4>
//             <div className="social-icons">
//                 <a href="https://github.com/dianestephani" className="fab fa-github" aria-hidden="true" target="_blank" rel="noreferrer"> </a>
//                 {/* <a href="#" className="fa fa-twitter" aria-hidden="true" target="_blank" rel="noreferrer"></a>
//                 <a href="#" className="fa fa-linkedin" aria-hidden="true" target="_blank" rel="noreferrer"></a> */}
//             </div>
//         </div>
//     </div>

// {/* Backend */}
// <div className="card">
//         <div className="card-front"></div>
//         <div className="card-back">
//             <h4>Peng Chen<br /><span>Backend</span></h4>
//             <div className="social-icons">
//                 <a href="https://github.com/PengChen11" className="fab fa-github" aria-hidden="true" target="_blank" rel="noreferrer"> </a>
//                 {/* <a href="#" className="fa fa-twitter" aria-hidden="true" target="_blank" rel="noreferrer"></a>
//                 <a href="#" className="fa fa-linkedin" aria-hidden="true" target="_blank" rel="noreferrer"></a> */}
//             </div>
//         </div>
//     </div>

// {/* Game Logic */}
//     <div className="card">
//         <div className="card-front"></div>
//         <div className="card-back">
//             <h4>Joe Pennock<br /><span>Game Logic</span></h4>
//             <div className="social-icons">
//                 <a href="https://github.com/penjoe" className="fab fa-github" aria-hidden="true" target="_blank" rel="noreferrer"> </a>
//                 {/* <a href="#" className="fa fa-twitter" aria-hidden="true" target="_blank" rel="noreferrer"></a>
//                 <a href="#" className="fa fa-linkedin" aria-hidden="true" target="_blank" rel="noreferrer"></a> */}
//             </div>
//         </div>
//     </div>

//     <div className="card">
//         <div className="card-front"></div>
//         <div className="card-back">
//             <h4>Kory Jackson<br /><span>Game Logic</span></h4>
//             <div className="social-icons">
//                 <a href="https://github.com/Dirrbick" className="fab fa-github" aria-hidden="true" target="_blank" rel="noreferrer"> </a>
//                 {/* <a href="#" className="fa fa-twitter" aria-hidden="true" target="_blank" rel="noreferrer"></a>
//                 <a href="#" className="fa fa-linkedin" aria-hidden="true" target="_blank" rel="noreferrer"></a> */}
//             </div>
//         </div>
//     </div>


// {/* UI/UX */}
//     <div className="card">
//         <div className="card-front"></div>
//         <div className="card-back">
//             <h4>Brendon Hampton<br /><span>UI/UX</span></h4>
//             <div className="social-icons">
//                 <a href="https://github.com/BrendonLH" className="fab fa-github" aria-hidden="true" target="_blank" rel="noreferrer"> </a>
//                 {/* <a href="#" className="fa fa-twitter" aria-hidden="true" target="_blank" rel="noreferrer"></a>
//                 <a href="#" className="fa fa-linkedin" aria-hidden="true" target="_blank" rel="noreferrer"></a> */}
//             </div>
//         </div>
//     </div>

//     <div className="card">
//         <div className="card-front"></div>
//         <div className="card-back">
//             <h4>Edgar Romero<br /><span>UI/UX</span></h4>
//             <div className="social-icons">
//                 <a href="https://github.com/Edgar-Romero87" className="fab fa-github" aria-hidden="true" target="_blank" rel="noreferrer"> </a>
//                 {/* <a href="#" className="fa fa-twitter" aria-hidden="true" target="_blank" rel="noreferrer"></a>
//                 <a href="#" className="fa fa-linkedin" aria-hidden="true" target="_blank" rel="noreferrer"></a> */}
//             </div>
//         </div>
//     </div>

//     <div className="aboutCard">
//         <div className="card-front"></div>
//         <div className="card-back">
//             <h4>Chris Bortel<br /><span>UI/UX</span></h4>
//             <div className="social-icons">
//                 <a href="https://github.com/Chris-Bortel" className="fab fa-github" aria-hidden="true" target="_blank" rel="noreferrer"> </a>
//                 {/* <a href="#" className="fa fa-twitter" aria-hidden="true" target="_blank" rel="noreferrer"></a>
//                 <a href="#" className="fa fa-linkedin" aria-hidden="true" target="_blank" rel="noreferrer"></a> */}
//             </div>
//         </div>
//     </div> */}