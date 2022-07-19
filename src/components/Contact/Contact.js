import React, { useRef } from 'react';
// import contact1 from "./contact1.png"
import "./Contact.css"
import emailjs from 'emailjs-com';
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xru7wpc', 'template_hi1wzg6', form.current, 'eX753HaitUR1eTgiT')
      .then((result) => {
          alert("Message was sent successfully");
      }, (error) => {
        alert("Failed to send message");
      });
    e.target.reset();  
  };

  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src='  ' alt='' />
                </div>
                <div className='details'>
                  <h1>Leela Sai Kumar</h1>
                  <p>Looking for good opportunities</p>
                  <p>I'm an immediate joiner if the skills suits your criteria. Connect with me via call or mail.</p> <br />
                  <p>Phone: +918309543480</p>
                  <p>Email: leelasaikumar999.lsk@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                  <button className='btn_shadow'>
                  <a href="https://www.linkedin.com/in/leela-sai-kumar-dadi/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" ></i></a>
                  </button>
                  <button className='btn_shadow'>
                  <a href="https://github.com/LeelaSai333" target="_blank" rel="noreferrer"><i className="fab fa-github" ></i></a>
                  </button> 
                  <button className='btn_shadow'>
                  <a href="mailto:leelasaikumar999.lsk@gmail.com"  rel="noreferrer"><HiOutlineMail size={19} /> </a>
                  </button> 
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
            <form ref={form} onSubmit={sendEmail}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' placeholder='Enter your name'/>
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' placeholder='Enter your phone number'/>
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' placeholder='Enter your email'/>
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' placeholder='Enter your subject'/>
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' placeholder='Enter your message'></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact