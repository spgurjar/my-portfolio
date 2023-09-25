import "./Skills.css";
import "../TagCss/topTag.css";
import {TbIcons} from "react-icons/tb";
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3} from "react-icons/di";
import {BiLogoJavascript} from "react-icons/bi";
import {DiJqueryLogo} from "react-icons/di";
import {DiReact} from "react-icons/di";

import {TbBrandVscode} from "react-icons/tb";
import {BiLogoGit} from "react-icons/bi";
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
           <span className="heading-text1">My <span className="heading-text2">Advantages</span></span>
           </div>
           <div className="skl-content-head">Web Development</div>
           <div className="skl-content">
            <SklBox logo = {AiFillHtml5} name = "HTML" />
            <SklBox logo = {DiCss3} name = "CSS" />
            <SklBox logo = {BiLogoJavascript} name = "JavaScript" />
            <SklBox logo = {DiJqueryLogo} name = "jQuery" />
            <SklBox logo = {DiReact} name = "REACT" />
           </div>
           <div className="skl-content-head">Software Packages</div>
           <div className="skl-content">
            <SklBox logo = {TbBrandVscode} name = "VS Code" />
            <SklBox logo = {BiLogoGit} name = "Git" />
            <SklBox logo = {AiOutlineGithub} name = "GitHub" />
            <SklBox logo = {IoLogoNodejs} name = "NodeJs" />
            <SklBox logo = {DiMongodb} name = "Mongodb" />
           </div>
        </div>
    )
}