import React from 'react';
import Navbar from '../header/navbar/navbar.js';
import Footer from '../footer/footer.js';
import './aboutPage.scss';
export default function aboutPage() {
  return (
      <>
   <Navbar/>
  

    <div class="grid-container">
    <div class="diane about-card">
    <p>Diane Stephani <br/> <span>Project Manager</span></p>
        
        <div className="social-icons">
            <a href="https://github.com/dianestephani" className="fab fa-github" aria-hidden="true" target="_blank" rel="noreferrer"> </a>
            {/* <a href="#" className="fa fa-twitter" aria-hidden="true" target="_blank" rel="noreferrer"></a>
            <a href="#" className="fa fa-linkedin" aria-hidden="true" target="_blank" rel="noreferrer"></a> */}
        </div>
    </div>
    <div class="peng about-card">Peng Chen</div>
    <div class="joe about-card">Joe Pennock</div>
    <div class="kory about-card">Kory Jackson</div>
    <div class="brendon about-card">Brendon Hampton</div>
    <div class="chris about-card">Chris Bortel</div>
    <div class="edgar about-card">Edgar Romero</div>
    </div>
    <div class="footer"><Footer/></div>
    






    
    </>
)
}



<div className="card">
         <div className="card-front"></div>
         <div className="card-back">
             <h4>Diane Stephani<br /><span>Game Logic</span></h4>
             <div className="social-icons">
                 <a href="https://github.com/dianestephani" className="fab fa-github" aria-hidden="true" target="_blank" rel="noreferrer"> </a>
                 <a href="#" className="fa fa-twitter" aria-hidden="true" target="_blank" rel="noreferrer"></a>
                 <a href="#" className="fa fa-linkedin" aria-hidden="true" target="_blank" rel="noreferrer"></a>
             </div>
         </div>
     </div>

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






// <section className="wrapper">
// <div className="aboutCard" >
//     1. Diane Stephani<br /><span>Game Logic</span>
// </div>


// <div className="aboutCard" item1>
//     2. Peng Chen<br /><span>Backend</span>
// </div>

// <div className="aboutCard">
// 3. Joe Pennock <br /><span>Game Logic</span>
// </div>

// <div className="aboutCard">
// 4. Kory Jackson<br /><span>Game Logic</span>
// </div>


// <div className="aboutCard">
// 5. Brendon Hampton<br /><span>UI/UX</span>
// </div>

// <div className="aboutCard">
// 6. Edgar Romero<br /><span>UI/UX</span>
// </div>

// <div className="aboutCard">
// 7. Chris Bortel<br /><span>UI/UX</span>
// </div>
// </section>