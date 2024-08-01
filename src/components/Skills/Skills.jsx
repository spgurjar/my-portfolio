import "./Skills.css";
import "../TagCss/topTag.css";
import {TbIcons} from "react-icons/tb";
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3} from "react-icons/di";
import { RiJavascriptLine } from "react-icons/ri";
import {DiJqueryLogo} from "react-icons/di";
import {DiReact} from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandDjango } from "react-icons/tb";
import { AiOutlineConsoleSql } from "react-icons/ai";

import {TbBrandVscode} from "react-icons/tb";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import {AiOutlineGithub} from "react-icons/ai";
import {IoLogoNodejs} from "react-icons/io5";
import {DiMongodb} from "react-icons/di";

import { SklBox } from "./SklBox";


export const Skills = ()=> {
    return(
        <div id="sk" className="skills-body" >
          <div className="top-tag">
            <button className="tag-btn">
            <TbIcons className="tag-logo"/>
           <span className="tag-text">SKILLS</span> 
           </button>
           </div>
           <div className="skl-heading">
           <span className="heading-text1">My <span className="heading-text2">Experties</span></span>
           </div>
           <div className="skl-content-head">Technologies</div>
           <div className="skl-content">
            <SklBox logo = {DiReact} name = "ReactJs" />
            <SklBox logo = {TbBrandNextjs} name = "NextJs" />
            <SklBox logo = {RiJavascriptLine} name = "JavaScript" />
            <SklBox logo = {TbBrandDjango} name = "Django" />
            <SklBox logo = {AiOutlineConsoleSql} name = "SQLite" />
           </div>
           {/* <div className="skl-content-head">Software Packages</div> */}
           <div className="skl-content">
            <SklBox logo = {TbBrandVscode} name = "VS Code" />
            <SklBox logo = {TbBrandGoogleAnalytics} name = "Google Analytics" />
            <SklBox logo = {AiOutlineGithub} name = "GitHub" />
            <SklBox logo = {IoLogoNodejs} name = "NodeJs" />
            <SklBox logo = {DiMongodb} name = "Mongodb" />
           </div>
        </div>
    )
}