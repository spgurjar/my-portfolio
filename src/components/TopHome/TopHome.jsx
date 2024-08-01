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
           <div className="tag-text">INTRODUCE</div> 
           </button>
           </div>
           <div className="intro-text">
           <span className="head-text1">Hello from <span className="head-text2">Shyam,</span><br/>Full Stack Developer</span>
           </div>
           <div className="my-aim">
            <p className="aim-text">I spend my days (and often nights) painting the Internet canvas with <span>Projects</span> and lines of code, turning zeroes and ones into immersive, interactive experiences.</p>
            <p className="aim-text">When I'm not crafting beautiful web experiences, you can find me trekking through majestic mountains, riding bikes on twisty roads, and losing myself in the melodies of my favorite music.</p>
           </div>
        </div>

    )
}