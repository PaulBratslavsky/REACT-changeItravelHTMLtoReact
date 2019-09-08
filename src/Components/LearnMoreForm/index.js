import React, { Component } from 'react';
import './learnmoreform.scss';

class Form extends Component {

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  }

  render() {
    
    return (
      <div className="form-style-5" >
        <form onSubmit={this.handleFormSubmit}>
        <fieldset>
        <legend><span className="number">1</span> Tell Us About Yourself</legend>
        <input type="text" name="field1" placeholder="Your Name *" />
        <input type="email" name="field2" placeholder="Your Email *" />
        <textarea name="field3" placeholder="About yourself"></textarea>
        </fieldset>
        <input type="submit" value="Apply" />
        </form>
      </div>
    )
  }
}

export default Form;
