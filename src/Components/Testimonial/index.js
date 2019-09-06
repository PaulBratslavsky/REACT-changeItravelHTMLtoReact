import React from 'react';
import ImageBackground from './../ImageBackground';
import './testimonials.scss';

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <ImageBackground image={"./img/beachandfun.jpg"} alt="My image on vacation."/>
      <div className="about-section__header center">
        <h2 className="margin-bottom-2">Testimonials.</h2>
        <h3>What our happy clients are saying.</h3>
      </div>

      <div className="testimomials-items">
        <div className="content-container">

    
        <div className="testimonials-item">
          <img src="https://i.pravatar.cc/300" alt="My portrait" className="testimonials-item__image"/>
          <div className="testimonials-item__content">
            <h2>Jane Doe</h2>
            <h3>9 Time Escaper</h3>
            <p>&ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;</p>
          </div>
        </div>

        <div className="testimonials-item">
          <img src="https://i.pravatar.cc/300" alt="My portrait" className="testimonials-item__image"/>
          <div className="testimonials-item__content">
            <h2>Jane Doe</h2>
            <h3>9 Time Escaper</h3>
            <p>&ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;</p>
          </div>
        </div>

        <div className="testimonials-item">
          <img src="https://i.pravatar.cc/300" alt="My portrait" className="testimonials-item__image"/>
          <div className="testimonials-item__content">
            <h2>Jane Doe</h2>
            <h3>9 Time Escaper</h3>
            <p>&ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;</p>
          </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Testimonials;
