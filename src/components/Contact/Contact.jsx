import "../TagCss/topTag.css";
import "./Contact.css";
import {FiMail} from "react-icons/fi";
import {BsEmojiSmile} from "react-icons/bs";
import { useState } from "react";



export const Contact = () => {

  const [Message, setMessage] = useState("");

  const handleSubmit = (e) => {
    console.log(Message);
  }

  const onChange = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div id="co" className="contact-body">

           <div className="top-tag">
            <button className="tag-btn">
            <FiMail className="tag-logo"/>
           <span className="tag-text">CONNECT</span> 
           </button>
           </div>

           <div className="cnct-heading">
           <span className="heading-text1">Get in <span className="heading-text2">Touch</span></span>
          </div>

    <div className="input-contact">
       <div className="input-1">
          <ul className='ul-input'>
             <p className='fn'>Full Name<span className='spanx'>*</span></p>
               <input className='inpt' type="text" name="" placeholder='Enter your Full Name' />
          </ul>

          <ul className='ul-input'>
             <p className='fn'>Phone(optional)<span className='spanx'>*</span></p>
               <input className='inpt' type="text" name="" placeholder='Enter Phone Number' />
          </ul>

          <ul className='ul-input'>
             <p className='fn'>Message<span className='spanx'>*</span></p>
               <input value={Message} onChange={onChange} className='inpt' type="text" name="" placeholder='Your Message here .........' />
          </ul>
      </div>

      <div className="input-2">
          <ul className='ul-input'>
             <p className='fn'>E-mail<span className='spanx'>*</span></p>
               <input className='inpt' type="text" name="" placeholder='Your Email Address' />
          </ul>
          <ul className='ul-input'>
             <p className='fn'>Subject<span className='spanx'>*</span></p>
               <input className='inpt' type="text" name="" placeholder='Select a Subject' />
          </ul>
      </div>
  </div>

  <div className="submit">
    <button onClick={handleSubmit} className='Send'>Send Messages <BsEmojiSmile className='emoji'/></button>
  </div>   
</div>   
    )
}