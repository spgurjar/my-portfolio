import "../TagCss/topTag.css";
import "./Journey.css";
import {BsPerson} from "react-icons/bs";


export const Journey = () => {
    return(
        <div id="jr" className="jrny-body">
              <div className="top-tag">
            <button className="tag-btn">
            <BsPerson className="tag-logo"/>
           <span className="tag-text">JOURNEY</span> 
           </button>
           </div>
           <div className="jrny-heading">
           <span className="heading-text1">About My <span className="heading-text2">Journey</span></span>
           </div>
           <div className="jrny-content">
           
            <p className="jrny-txt">In my first year of college, I discovered web development out of curiosity. Crafting web pages with HTML and CSS became a rewarding creative outlet. This passion led me to delve into JavaScript and advanced frameworks, shaping web development into both a hobby and a career aspiration, propelling my journey of continuous learning.</p>
           </div>
        </div>
    )
}