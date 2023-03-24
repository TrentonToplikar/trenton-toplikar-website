import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import MyVerticallyCenteredModal from './SuccessAlert';
import './styles/ContactForm.css'

export const ContactForm = () => {
  const [modalShow, setModalShow] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_34kfxcn', 'template_pvrnpq7', form.current, 'YIwkIts8NhRxDKhfG')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div>
    <form id="contact-form" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder="Name" />
      <label>Email</label>
      <input type="email" name="user_email" required={true} placeholder="Email"/>
      <label>Message</label>
      <textarea name="message" required={true} placeholder="Message"/>
      <input type="submit" value="Send" variant="primary" onClick={() => setModalShow(true)}/>
    </form>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default ContactForm;