// src/pages/Contact.js
import React from 'react';
import { Element } from 'react-scroll'
import ContactForm from '../ui/ContactForm';
import './styles/Contact.css';



const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Contact Me</h1>
          <p>Feel free to reach out!</p>
        </div>

        <Element name='contact'>
          <div className=" contact">
            <ContactForm />
          </div>
        </Element>
      </div>
    </>
  );
};

export default Contact;



