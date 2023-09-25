import "./about.css"
import logo from './image/logo.png';
import profile from './image/ppic.jpg';
import { FaInstagram} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { IoIosMail }  from "react-icons/io";

export const About = () => {
    return (
      <>
        <div className="about-cart">
          <div className="about-cart-header">
            <img className="imgc" src={ logo} alt="logo" />
            <span className="designation">Full Stack <br></br> Developer</span>
          </div>
          <img className="imgp" src={profile} alt="" />
          <h2 className="email">sgurjarpatel6056@gmail.com</h2> 
          <h2 className="address" >IIT Roorkee, Uttarakhand</h2>
          <p className="copyright">©2023 Shyam. All Rights Reserved</p>
          <div className="social-media-door">
            <a href="https://www.linkedin.com/in/shyam-patel-5a127a223/"><FaLinkedin className="logo" /></a>
            <a href="https://github.com/spgurjar"><FaGithub className="logo"/> </a>
            <a href="https://www.instagram.com/shyam_patel_0502/"><FaInstagram className="logo"/></a> 
            <a href="https://twitter.com/ShyamPatel521"><FaTwitter className="logo"/></a> 
          </div>
          <div className="hireButton">
          <a href="mailto:sgurjarpatel6056@gmail.com.com" className="btn" >
             <IoIosMail className="logo2" />HIRE ME!
          </a>
        </div>
        </div>
        </>
    )
}