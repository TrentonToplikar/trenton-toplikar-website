import React from 'react'
import ContactForm from './ContactForm'
import './styles/Contact.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Contact = () => {
  return (
    <div className="horizontal-rule" id="contact">
        <hr />
      <div className="section container section-container">
          <h2 className="more-questions">Contact Me</h2>
        <div className="questions">
          <h3 className="below-more-questions">Have a question? Send me a message with your name and email!</h3>
        </div>
        <ContactForm  className="contact-form"/>
      </div>
    </div>
  )
}
export default Contact