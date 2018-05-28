import React, { Component } from 'react';
import '../../../css/_welcome.css';

class Welcome extends Component {

constructor(props){
  super(props);
  this.state = {
    height: window.innerHeight,
    width: window.innerWidth,
    logoHeight: 3/4*655/1178*window.innerWidth,
    logoWidth: 3/4*window.innerWidth
  }
}

  resize = () => {
    this.setState({height: window.innerHeight,
      width: window.innerWidth,
      logoHeight: 3/4*655/1178*window.innerWidth,
      logoWidth: 3/4*window.innerWidth
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
          <div className="welcome-title center">
            <h1><b>COMING SOON!</b></h1>
            <h2>Check out <a href='/about' onClick={this.props.history.push('/about')}>About</a> to learn more about <p className='subscrypto'>Subscrypto</p></h2>
          </div>
        </header>
      </div>
    );
  }
}

export default Welcome;
