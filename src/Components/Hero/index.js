import React, { Component } from 'react';
import VideoBackground from '../VideoBackground';
import './hero.scss';
import Button from '../Button';
import Modal from '../Modal';
import LearnMoreForm from '../LearnMoreForm';

class Hero extends Component {

  state = {
    modalState:  'modal-hide'
  
  }

  openModalWindow = () => {
    console.log('open modal clicked');
    this.setState({modalState: 'modal-show'});
  }

  closeModalWindow = () => {
    console.log('close modal clicked');
    this.setState({modalState: 'modal-hide'});
  }


  render () {
  const video = "./img/oceanview.mp4";

    return (
      <div className="hero-section center">
        <VideoBackground video={video} />
        <div className="hero-content">
          <h2 className="margin-bottom-1">Your clarity is one trip away.</h2>

          <h3 className="margin-bottom-2">We create soul restoring journeys that inspire you to be you.</h3>

          <Button openModalWindow={this.openModalWindow} backgroundColor="#FFA500" color="white" text="Plan Your Getaway"/>
        </div>
        <Modal modalState={this.state.modalState} closeModalWindow={this.closeModalWindow}>
          <LearnMoreForm />
        </Modal>
      </div>
    )
  }
}

export default Hero;
