// import "./Project.css";
// import "../TagCss/topTag.css";
// import {BsGrid3X2Gap} from "react-icons/bs";
// import pjimg1 from "./pjImg/project1.png";
// import pjimg2 from "./pjImg/project2.png";
// import pjimg3 from "./pjImg/project3.png";

// export const Project = () => {
//     return(
//        <div id="pr" className="project-body">
//            <div className="top-tag">
//             <button className="tag-btn">
//             <BsGrid3X2Gap className="tag-logo"/>
//            <span className="tag-text">PROJECTS</span> 
//            </button>
//            </div>

//            <div className="prjct-heading">
//            <span className="heading-text1">My <span className="heading-text2">Projects</span></span>
//            </div>
//            <div className="pj-body">
//             <div className="pj-abt">
//                 <div className="pj-name">Organic Produts Website</div>
//                 <div className="pj-dependencies">MERN Stack Project </div>
//                 <a href="https://www.thefarmerson.com/" target="blank">
//                     <button className="pj-view">View Project</button>
//                 </a>
//             </div>
//             <img className="pj-img" src={pjimg1} alt="img" />
//            </div>

//            <div className="pj-body">
//            <img className="pj-img" src={pjimg2} alt="img" />
//             <div className="pj-abt">
//                 <div className="pj-name">URL Shortner</div>
//                 <div className="pj-dependencies">HTML, CSS, JavaScript, MEN Project</div>
//                 <a href="https://ltos-url-w9ey.onrender.com/" target="blank" ><button className="pj-view">View Project</button>
//                 </a>
//             </div>
//            </div>

//            <div className="pj-body">
//             <div className="pj-abt">
//                 <div className="pj-name">Weather Web App</div>
//                 <div className="pj-dependencies"> HTML, CSS, AJAX, React </div>
//                 <a href="https://spgurjar.github.io/weather-app/" target="blank">
//                     <button className="pj-view">View Project</button>
//                 </a>
//             </div>
//             <img className="pj-img" src={pjimg3} alt="img" />
//            </div>

//        </div> 
//     )
// }


import ReactGA from 'react-ga4';
import "./Project.css";
import "../TagCss/topTag.css";
import { BsGrid3X2Gap } from "react-icons/bs";
import pjimg1 from "./pjImg/project1.png";
import pjimg2 from "./pjImg/project2.png";
import pjimg3 from "./pjImg/project3.png";

const trackButtonClick = (projectName) => {
  ReactGA.event({
    category: 'Projects',
    action: 'View Project Button Click',
    label: projectName,
  });
};

export const Project = () => {
  return (
    <div id="pr" className="project-body">
      <div className="top-tag">
        <button className="tag-btn">
          <BsGrid3X2Gap className="tag-logo" />
          <span className="tag-text">PROJECTS</span>
        </button>
      </div>

      <div className="prjct-heading">
        <span className="heading-text1">My <span className="heading-text2">Projects</span></span>
      </div>

      <div className="pj-body">
        <div className="pj-abt">
          <div className="pj-name">Organic Products Website</div>
          <div className="pj-dependencies">MERN Stack Project</div>
          <a href="https://www.thefarmerson.com/" target="blank" onClick={() => trackButtonClick('Organic Products Website')}>
            <button className="pj-view">View Project</button>
          </a>
        </div>
        <img className="pj-img" src={pjimg1} alt="img" />
      </div>

      <div className="pj-body">
        <img className="pj-img" src={pjimg2} alt="img" />
        <div className="pj-abt">
          <div className="pj-name">URL Shortener</div>
          <div className="pj-dependencies">HTML, CSS, JavaScript, MEN Project</div>
          <a href="https://ltos-url-w9ey.onrender.com/" target="blank" onClick={() => trackButtonClick('URL Shortener')}>
            <button className="pj-view">View Project</button>
          </a>
        </div>
      </div>

      <div className="pj-body">
        <div className="pj-abt">
          <div className="pj-name">Weather Web App</div>
          <div className="pj-dependencies">HTML, CSS, AJAX, React</div>
          <a href="https://spgurjar.github.io/weather-app/" target="blank" onClick={() => trackButtonClick('Weather Web App')}>
            <button className="pj-view">View Project</button>
          </a>
        </div>
        <img className="pj-img" src={pjimg3} alt="img" />
      </div>

    </div>
  );
};
