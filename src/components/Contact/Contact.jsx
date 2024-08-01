// import "../TagCss/topTag.css";
// import "./Contact.css";
// import {FiMail} from "react-icons/fi";
// import {BsEmojiSmile} from "react-icons/bs";
// import { useState } from "react";



// export const Contact = () => {

//   const [Message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     console.log(Message);
//   }

//   const onChange = (e) => {
//     setMessage(e.target.value);
//   }

//   return (
//     <div id="co" className="contact-body">

//            <div className="top-tag">
//             <button className="tag-btn">
//             <FiMail className="tag-logo"/>
//            <span className="tag-text">CONNECT</span> 
//            </button>
//            </div>

//            <div className="cnct-heading">
//            <span className="heading-text1">Get in <span className="heading-text2">Touch</span></span>
//           </div>

//     <div className="input-contact">
//        <div className="input-1">
//           <ul className='ul-input'>
//              <p className='fn'>Full Name<span className='spanx'>*</span></p>
//                <input className='inpt' type="text" name="" placeholder='Enter your Full Name' />
//           </ul>

//           <ul className='ul-input'>
//              <p className='fn'>Phone(optional)<span className='spanx'>*</span></p>
//                <input className='inpt' type="text" name="" placeholder='Enter Phone Number' />
//           </ul>

//           <ul className='ul-input'>
//              <p className='fn'>Message<span className='spanx'>*</span></p>
//                <input value={Message} onChange={onChange} className='inpt' type="text" name="" placeholder='Your Message here .........' />
//           </ul>
//       </div>

//       <div className="input-2">
//           <ul className='ul-input'>
//              <p className='fn'>E-mail<span className='spanx'>*</span></p>
//                <input className='inpt' type="text" name="" placeholder='Your Email Address' />
//           </ul>
//           <ul className='ul-input'>
//              <p className='fn'>Subject<span className='spanx'>*</span></p>
//                <input className='inpt' type="text" name="" placeholder='Select a Subject' />
//           </ul>
//       </div>
//   </div>

//   <div className="submit">
//     <button onClick={handleSubmit} className='Send'>Send Messages <BsEmojiSmile className='emoji'/></button>
//   </div>   
// </div>   
//     )
// }


import "../TagCss/topTag.css";
import "./Contact.css";
import {FiMail} from "react-icons/fi";
import {BsEmojiSmile} from "react-icons/bs";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phoneno: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      data,
      process.env.REACT_APP_EMAILJS_USER_ID
     )
      .then((result) => {
        console.log(result.text);
        toast.success('Message Sent Successfully!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }, (error) => {
        console.log(error.text);
        toast.error('Failed to Send Message. Try Again!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

    setData({
      name: '',
      email: '',
      subject: '',
      message: '',
      phoneno: '',
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData, [name]: value,
    }));
  };

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
            <input className='inpt' type="text" name="name" placeholder='Enter your Full Name' value={data.name} onChange={handleInputChange} required />
          </ul>

          <ul className='ul-input'>
            <p className='fn'>Phone (optional)<span className='spanx'>*</span></p>
            <input className='inpt' type="text" name="phoneno" placeholder='Enter Phone Number' value={data.phoneno} onChange={handleInputChange} />
          </ul>

          <ul className='ul-input'>
            <p className='fn'>Message<span className='spanx'>*</span></p>
            <input value={data.message} onChange={handleInputChange} className='inpt' type="text" name="message" placeholder='Your Message here .........' required />
          </ul>
        </div>

        <div className="input-2">
          <ul className='ul-input'>
            <p className='fn'>E-mail<span className='spanx'>*</span></p>
            <input className='inpt' type="text" name="email" placeholder='Your Email Address' value={data.email} onChange={handleInputChange} required />
          </ul>
          <ul className='ul-input'>
            <p className='fn'>Subject<span className='spanx'>*</span></p>
            <input className='inpt' type="text" name="subject" placeholder='Select a Subject' value={data.subject} onChange={handleInputChange} required />
          </ul>
        </div>
      </div>

      <div className="submit">
        <button onClick={handleSubmit} className='Send'>Send Messages <BsEmojiSmile className='emoji'/></button>
      </div>
      <ToastContainer />
    </div>
  );
};
