// src/pages/Contact.js
import React from 'react';
import { Element } from 'react-scroll'
import ContactForm from '../ui/ContactForm';
import './styles/Contact.css';



const Contact = () => {
  return (
    <>
      {/* <div className="contact-page"> */}
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Have a question or want to work together? Feel free to reach out!</p>
      </div>
      {/* </div> */}
    <Element name='contact'>
        <div className="container contact">
          <ContactForm />
        </div>
    </Element>
    </>
  );
};

export default Contact;



