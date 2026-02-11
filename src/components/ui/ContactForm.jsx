// src/components/ui/ContactForm.jsx
import React, { useState } from 'react';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaRegEnvelope, FaWhatsapp } from "react-icons/fa6";
import { useForm } from '@formspree/react';
import Button from '../ui/Button';
import './styles/ContactForm.css';
import { toast } from './Toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [state, formspreeSubmit] = useForm("mrbywwkg");
  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    else if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    else if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    else if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const errors = validateForm();
    setFormErrors(errors);

    // If no errors, submit form
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      try {
        // Here you would normally send the form data to a server
        // Using a timeout to simulate an API call
        const result = await formspreeSubmit(e); // submit to Formspree
        console.log("Form submitted...");

        await new Promise(resolve => setTimeout(resolve, 1000));
        // Success
        toast.success("Your message has been sent. I\'ll get back to you soon!");

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

      } catch (error) {
        // Error
        toast.error('There was an error sending your message. Please try again!');
      }

      setIsSubmitting(false);
    }
  };
  function WhatsApp() {
    const phoneNumber = "918540906167"; // Replace with your real WhatsApp number
    const message = "Hi Uttam, \n\nI came across your portfolio and would love to discuss a potential project with you. \n\nLet’s connect!";
    const encodedMessage = encodeURIComponent(message);
    const whatsAppLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    return whatsAppLink;
  }

  function Gmail() {
    const email = "uttamkrp08@gmail.com"; // Replace with your email
    const subject = "Let's Collaborate on a Project";
    const body = `Hi Uttam,

I came across your portfolio and really liked your work in web development.
I’m interested in discussing a potential collaboration on a project.

Here are a few details:
- Project Type: [Specify your project idea]
- Timeline: [Specify your timeline]
- Budget: [Optional]

Looking forward to hearing from you!

Best regards,
[Your Full Name]
[Your Portfolio Link]`;
    const mailToLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return mailToLink;
  }



  return (
    <div className=" contact-form-section">
      <div className="contact-form-container">
        <div className="contact-info">
          <div className="contact-image">
            <img src="/portfolio/images/contact.svg" alt="Contact" />
          </div>

          <div className="contact-social">
            <h3>Connect with me</h3>
            <div className="social-icons">
              <a href={WhatsApp()} target="_blank" rel="noopener noreferrer" aria-label="whatsapp">
                <FaWhatsapp className='social-icon' />
              </a>
              <a href={Gmail()} target="_blank" rel="noopener noreferrer" aria-label="gmail">
                <FaRegEnvelope className='social-icon' />
              </a>
              <a href="https://github.com/uttam08er" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className='social-icon' />
              </a>
              <a href="https://linkedin.com/in/uttam08er" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className='social-icon' />
              </a>
              {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className='social-icon' />
              </a> */}
              {/* <a href="https://instagram.com/uttamkr_08" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className='social-icon' />
              </a> */}
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Send a Message</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
                className={formErrors.name ? 'error' : ''}
              />
              {formErrors.name && <span className="error-message">{formErrors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='example@gmail.com'
                value={formData.email}
                onChange={handleChange}
                className={formErrors.email ? 'error' : ''}
              />
              {formErrors.email && <span className="error-message">{formErrors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder='Your main title'
                value={formData.subject}
                onChange={handleChange}
                className={formErrors.subject ? 'error' : ''}
              />
              {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder='Enter your message'
                value={formData.message}
                onChange={handleChange}
                className={formErrors.message ? 'error' : ''}
              ></textarea>
              {formErrors.message && <span className="error-message">{formErrors.message}</span>}
            </div>

            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
            >
              {/* {isSubmitting ? 'Sending...' : <FaPaperPlane className='btn-icon' />} */}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;