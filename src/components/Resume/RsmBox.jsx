import "./RsmBox.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

export const RsmBox = (props) => {
    console.log(props.weblink);
    return(
    <div className="box-body">
        <div className="role-box">
            <div className="my-roleAt">
                {props.myRole}, <span>{props.roleAt} </span>
            </div>
            <div className="duration">{props.duration}</div>
        </div>
        <div className="details-box">
            <div className="left-box">
                <div className="location-box">
                    <div><FaLocationDot className="locIcon"/> {props.location}</div> 
                    <div><a style={{textDecoration:"none", color:"inherit"}} href={props.weblink}><FaExternalLinkSquareAlt className="locIcon2"/> {props.websiteName}</a></div>
                </div>
                <div className="description-box">{props.description}</div>
                <div className="skills-box"> 
                   {props.skills && props.skills.map((skill, index) => (
                        <div className="skill" key={index}>{skill}</div>
                    ))}
                </div>
            </div>
            {props.clogo && <div className="right-box">
                <a style={{textDecoration:"none", color:"inherit"}} href={props.projectLink}>
                <div className="company-logo-box" ><img className="company-logo" src={props.clogo} alt="shyam portfolio" /></div>
                <div>{props.projectName}</div>
                </a>
            </div>}
        </div>
    </div>
    )
}