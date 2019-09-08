import React from 'react';
import ImageBackground from './../ImageBackground';
import './contact.scss';
import Form from '../Form';

const Contact = () => {
  return (
    <div className="contact">
      <ImageBackground image={"./img/features-beach.jpg"} alt="My vacation."/>
      <div className="about-section__header center">
      <div className="features-heading">
          <h2 className="margin-bottom-1">Let's Connect</h2>
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>

      <Form />
    </div>
  )
}

export default Contact;
