import "../TagCss/topTag.css";
import "./Resume.css";
import {AiOutlineFileText} from "react-icons/ai";
import { RsmBox } from "./RsmBox";

export const Resume = () => {
    return (
        <div id="re" className="resume-body">
          <div className="top-tag">
            <button className="tag-btn">
            <AiOutlineFileText className="tag-logo"/>
           <span className="tag-text">RESUME</span> 
           </button>
           </div>
           <div className="rsm-heading">
            <span className="heading-text1">Education & <span className="heading-text2">Experience</span></span>
            </div>
            <div className="rsmBox-content">
             <RsmBox duration="Oct 2022 - present" role="Secretary of Wellness" at="Radhakrishnan Bhawan, IIT Roorkee" />   
            </div>
            <div className="rsmBox-content">
             <RsmBox duration="Oct 2022 - present" role="Head of Events" at="Hostle Council, IIT Roorkee"/>   
            </div>
            <div className="rsmBox-content">
             <RsmBox duration="May 2023 - June 2023" role="Web Development Intern" at="Satvik Kissan Utpadak Sawayat Sahkarita"  />   
            </div> 
            <div className="rsmBox-content">
             <RsmBox duration="2021 - present" role="Bachelor of Technology" at="IIT Roorkee" />   
            </div> 
            <a href="https://drive.google.com/file/d/1IHYvTAtbPWFRkJ_k8aX596pTlyyNnPNf/view?usp=sharing" target="blank">
                    <button className="rs-view">View Resume</button>
                </a>
        </div>
    )
}