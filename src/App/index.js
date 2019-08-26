import React, { Component } from 'react';
import './app.scss';
import { Route, Switch } from 'react-router-dom';

import Header from '../Components/Header';

import MainView from '../Components/MainView';
  import Hero from './../Components/Hero';
  import AboutUs from './../Components/AboutUs';
  import Features from './../Components/Features';
  import Testimonials from './../Components/Testimonial';

import Footer from '../Components/Footer';
import MobileMenu from '../Components/MobileMenu';

class App extends Component {

  state = {
    showMobileNav: true
  }

  onClickToggleMenu = () => {
    console.log('toggle button clicked');
  }

  onClickCloseMenu = () => {
    console.log('Menu closed clicked')
  }

  render() {
    return (
      <div className="app">
        <Header />
        <MainView>
          <div className="container">
          <MobileMenu />
            <Switch>
              <Route exact path='/' component={Hero} />
              <Route path='/aboutus' component={AboutUs} />
              <Route path='/features' component={Features} />
              <Route path='/testimonials' component={Testimonials} />
            </Switch>
          </div>
        </MainView>
        <Footer />
      </div>
    );

  }
}

export default App;
