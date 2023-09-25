import {React} from "react";
import "./TopHome.css";
import "../TagCss/topTag.css";
import {GoHome} from "react-icons/go";
import { HomeBg } from "./homeBg";
// import ReactDOM from 'react-dom'

export const TopHome = () => {
    
    return (
        <div id="thm" className="tophome-body">
           
          <div className="top-tag">
          {/* <HomeBg/> */}
            <button className="tag-btn">
            <GoHome className="tag-logo"/>
           <span className="tag-text">INTRODUCE</span> 
           </button>
           </div>
           <div className="intro-text">
           <span className="head-text1">Hello from <span className="head-text2">Shyam,</span><br/>Full Stack Web Developer</span>
           </div>
           <div className="my-aim">
            <p className="aim-text">I'm a devoted web developer committed to crafting exceptional digital experiences</p>
           </div>
        </div>

    )
}