import "./RsmBox.css";

export const RsmBox = (props) => {
    return(
    <div className="box-body">
        <span className="duration">{props.duration}</span>
        <span className="role" >{props.role}</span>
        <span className="at">{props.at}</span>
        <span className="role" >{props.role2}</span>
        <span className="at">{props.at2}</span>
    </div>
    )
}