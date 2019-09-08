import React, { Component } from 'react';
import './modal.scss';

const Modal = (props) => {
    return (
      <div className={`modal ${props.modalState}`}>
        <button onClick={props.closeModalWindow} className="modal-close"><i className="fas fa-times"></i></button>
        <div className="modal-content">
          {props.children}
        </div>
      </div>
    )
}

export default Modal;
