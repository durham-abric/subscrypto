import React, { Component } from 'react';
import {Button, Panel} from 'react-bootstrap';

class Welcome extends Component {

constructor(props){
  super(props);
  this.state = {
    height: window.innerHeight,
    width: window.innerWidth,
    logoHeight: 30 + 5/8*655/1178*window.innerWidth,
    logoWidth:  100 + 5/8*window.innerWidth
  }
}

  resize = () => {
    this.setState({height: window.innerHeight,
      width: window.innerWidth,
      logoHeight: 30 + 5/8*655/1178*window.innerWidth,
      logoWidth:  100 + 5/8*window.innerWidth
  })}

  componentWillMount(){
    
  }

  componentDidMount(){
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.resize);
  }

  render() {
    return (
      <div className="welcome-wrapper">
        <header className="welcome-header">
          <img className="welcome-logo" src = {require('../../../images/Subscrypto_header.png')} 
            style ={{height:this.state.logoHeight, width:this.state.logoWidth}} alt="Subscrypto Header"/>
          <h1 className="welcome-title center"><b>COMING SOON!</b></h1>
          <br/>
          <div className="center welcome-text">
            <h2>Check out{' '}<i>About</i>{' '}to learn more about{' '}<b className="subscrypto">Subscrypto</b></h2>
            <h2>&amp;</h2>
            <h2><i>Signup</i> now to receive news, updates, release information!</h2>
          </div>
        </header>
      </div>
    );
  }
}

export default Welcome;
