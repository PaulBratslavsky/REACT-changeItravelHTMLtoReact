import React, { Component } from 'react';
import LogoContainer from './../LogoContainer';
import NavContainer from './../NavContainer';



class Header extends Component {
  state = {
    oppacity: 'show-oppacity'
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll); 
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll); 
  }

  handleScroll = () => {

    if ( window.pageYOffset >= 55) {
      this.setState({oppacity: 'hide-oppacity'});
    } else {
      this.setState({oppacity: 'show-oppacity'});
    }
  }
  
  render() {
    
    const { onClickToggleMenu } = this.props;

    return (
      <header className={`main-header center ${this.state.oppacity}`}>
        <div className="container flex-row-between">
          <LogoContainer />
          <NavContainer onClickToggleMenu={onClickToggleMenu}/>
        </div>
      </header>
    )

  }
}

export default Header;
