import "./sideBar.css"
import {AiOutlineHome} from "react-icons/ai";
import {BsPerson} from "react-icons/bs";
import {AiOutlineFileText} from "react-icons/ai";
import {TbIcons} from "react-icons/tb";
import {BsGrid3X2Gap} from "react-icons/bs";
import {FiMail} from "react-icons/fi";
import { useEffect } from "react";

export function SideBar () {

    useEffect(() => {
        // Add smooth scrolling behavior to all links with class 'logos' when the component mounts
        const links = document.querySelectorAll('.logos');
    
        links.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
    
            if (targetSection) {
              targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
                duration: 800 // Smooth scrolling duration in milliseconds
              });
            }
    });
    });

    return () => {
        // Clean up event listeners when the component unmounts
        links.forEach(link => {
          link.removeEventListener('click', () => {});
        });
    };
    },[]);

    return (
        <div className="side-bar-items">
            
            <div className="item-style"><a href="#thm" className="logos"><AiOutlineHome className="Slogo"/></a></div>
            <div className="item-style"><a href="#jr" className="logos"><BsPerson className="Slogo"/></a></div>
            <div className="item-style"><a href="#re" className="logos"><AiOutlineFileText className="Slogo"/></a></div>
            <div className="item-style"><a href="#sk"className="logos" ><TbIcons className="Slogo"/></a></div>
            <div className="item-style"><a href="#pr" className="logos"><BsGrid3X2Gap className="Slogo"/></a></div>
            <div className="item-style"><a href="#co" className="logos"><FiMail className="Slogo"/></a></div>
        </div>
    )
}