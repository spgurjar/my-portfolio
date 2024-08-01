import "../TagCss/topTag.css";
import "./Resume.css";
import {AiOutlineFileText} from "react-icons/ai";
import { RsmBox } from "./RsmBox";
import probzLogo from "./images/probzLogo.png"
import frogbar from "./images/frogTap.png";
import rrlogo from "./images/rrLogo.png";
import farmerson from "./images/FarmerSon.png"

export const Resume = () => {
    return (
        <div id="re" className="resume-body">
          <div className="top-tag">
            <button className="tag-btn">
            <AiOutlineFileText className="tag-logo"/>
           <span className="tag-text">EXPERIENCE</span> 
           </button>
           </div>
           <div className="rsm-heading">
            <span className="heading-text1">My <span className="heading-text2">Experience</span></span>
            </div>
            <div className="rsmBox-content">
            <RsmBox 
                 myRole="Software Engineer Intern"
                 roleAt="RareReach"
                 duration="May 2024 - July 2024"
                 location="Remote"
                 weblink="https://rarereach.com/"
                 websiteName="rarereach.com"
                 description="Developed the complete web solution(B2C) from scratch using the best frontend and backend technologies, and implemented Google Analytics for user tracking"
                 skills={['React','Vite','CSS3','Django', 'SQLite','Google Analytics', ]}
                 clogo={rrlogo}
                 projectName= "RareReach Waitlist"
                 projectLink="https://rarereach.com/"
             />  
            </div>
            <div className="rsmBox-content">
             <RsmBox 
                 myRole="Frontend Developer Intern"
                 roleAt="Kreative Tech"
                 duration="June 2024 - July 2024"
                 location="Remote"
                 websiteName="kreativetech.in"
                 weblink="https://kreativetech.in/"
                 description="Developed the frontend for version 2 of the PEPE Frogbar game, anticipated to serve 400,000 users."
                 skills={['JavaScript', 'React',"CSS", 'AJAX', "Redux", "Chakra UI"]}
                 clogo={frogbar}
                 projectName= "FrogBar Game"
                 projectLink="https://t.me/pepefrogbar_bot/pepefrogbar?startapp=BCjqsBSg1K489NQW0uP_f"
             />   
            </div>
            <div className="rsmBox-content">
            <RsmBox 
                 myRole="Frontend Engineer Intern"
                 roleAt="Credwise"
                 duration="Dec 2023 - Jan 2024"
                 location="Remote"
                 weblink="https://www.linkedin.com/company/credwiseclub/"
                 websiteName="credwise.co.in"
                 description="Developed front-end solutions(B2B) Probz in Fin Tech on Next.js framework."
                 clogo={probzLogo}
                 skills={['JavaScript', 'Next.js', 'CSS3', 'Figma']}
                 projectName= "Probz"
                 projectLink="https://probz.in/"
             /> 
            </div> 
            <a href="https://drive.google.com/file/d/1IHYvTAtbPWFRkJ_k8aX596pTlyyNnPNf/view?usp=sharing" target="blank">
                    <button className="rs-view">View Resume</button>
                </a>
        </div>
    )
}