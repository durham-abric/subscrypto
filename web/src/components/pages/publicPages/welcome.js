import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import '../../../css/_welcome.css';

class Welcome extends Component {

constructor(props){
  super(props);
  this.state = {
    height: window.innerHeight,
    width: window.innerWidth,
    loggedIn: false
  }
}

  resize = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

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
          <img className="welcome-logo" src = {require('../../../images/Subscrypto_header.png')} style = {{width:3/4*this.state.width, height:3/4*655/1178*this.state.width}}  alt="Subscrypto Header"/>
          <Panel className="panel panel-danger">
            <div className="panel-header">
              <h1 className="welcome-title">Coming Soon!</h1>
              <br/>
            </div>
            <div className="panel-body">
              <h2>Subscrypto is a service which will allow users to utilize the idle space in their subscription-based web accounts.</h2>
              <br/>
              <h3>The extra space can be converted into crypto-tokens which can be:
                  <ul>
                    <li>Sold for an effective discount on the subscription</li>
                    <li>Used to purchase space on other users' accounts [<b> Build your own package of subscriptions!</b>]</li>
                    <li>Held onto to appreciate value as the platform grows</li>
                  </ul>
              </h3>
            </div>
          </Panel>
        </header>
      </div>
    );
  }
}

export default Welcome;
