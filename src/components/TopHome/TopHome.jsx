import { React } from "react";
import "./TopHome.css";
import "../TagCss/topTag.css";
import { GoHome } from "react-icons/go";
import { HomeBg } from "./homeBg";
// import ReactDOM from 'react-dom'

export const TopHome = () => {

  return (
    <div id="thm" className="tophome-body">

      <div className="top-tag">
        {/* <HomeBg/> */}
        <button className="tag-btn">
          <GoHome className="tag-logo" />
          <div className="tag-text">INTRODUCE</div>
        </button>
      </div>
      <div className="intro-text">
        <span className="head-text1">Hello from <span className="head-text2">Shyam,</span><br />Software Developer Engineer</span>
      </div>
      <div className="my-aim">
        <p className="aim-text">I am a product-driven Software Engineer who specializes in building scalable, secure, and highly performant web applications. I thrive on turning complex technical challenges into seamless, interactive experiences.</p>
        <p className="aim-text">When I'm not architecting robust backends or optimizing React frontends, you can find me trekking through majestic mountains, riding bikes on twisty roads, and losing myself in the melodies of my favorite music.</p>
      </div>
    </div>

  )
}