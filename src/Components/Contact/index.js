import React from 'react';
import ImageBackground from './../ImageBackground';
import './contact.scss';
import Form from '../Form';

const Contact = () => {
  return (
    <div className="contact">
      <ImageBackground image={"./img/features-beach.jpg"} alt="My vacation."/>
      <div className="about-section__header center">
      <div className="features-heading margin-bottom-2">
          <i className="fas fa-star margin-bottom-3"></i>
          <h2>Let's Connect</h2>
        </div>
      </div>

      <Form />
    </div>
  )
}

export default Contact;
