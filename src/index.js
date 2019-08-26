import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './index.scss';
import App from './App/index';

const RootWithAuth = withRouter(App);
ReactDOM.render(<Router><RootWithAuth /></Router>, document.getElementById('root'));
