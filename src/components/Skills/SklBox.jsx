import "./SklBox.css";
import {GoHome} from "react-icons/go";

export const SklBox = (props) => {
    return (
        <div  className="skl-box-body">
          <div className="box-logo"><props.logo className="bx-logo"/></div>
          <span className="box-name">{props.name}</span>
        </div>
    )
}