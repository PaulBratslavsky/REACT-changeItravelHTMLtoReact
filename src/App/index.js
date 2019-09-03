import React, { Component } from 'react';
import './app.scss';
import { Route, Switch } from 'react-router-dom';

import Header from '../Components/Header';

import MainView from '../Components/MainView';
  import Hero from './../Components/Hero';
  import About from '../Components/About';
  import Features from './../Components/Features';
  import Testimonials from './../Components/Testimonial';
  import Contact from './../Components/Contact';

import Footer from '../Components/Footer';
import MobileMenu from '../Components/MobileMenu';

class App extends Component {

  state = {
    showMobileNav: false
  }

  onClickToggleMenu = () => this.setState( prevState => ({ showMobileNav: !prevState.showMobileNav }));


  onClickCloseMenu = () => this.setState({showMobileNav: false});
  

  render() {

    const { showMobileNav } = this.state;

    return (
      <div className="app">
        <Header onClickToggleMenu={this.onClickToggleMenu} />
        <MainView>
          
            <MobileMenu
              showMobileNav={showMobileNav} 
              onClickCloseMenu={this.onClickCloseMenu}
            />
            <Switch>
              <Route exact path='/' component={Hero} />
              <Route path='/about' component={About} />
              <Route path='/services' component={Features} />
              <Route path='/testimonials' component={Testimonials} />
              <Route path='/contact' component={Contact} />
            </Switch>
            
        </MainView>
        <Footer />
      </div>
    );

  }
}

export default App;
