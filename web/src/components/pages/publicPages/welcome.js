import React, { Component } from 'react';

class Welcome extends Component {

constructor(props){
  super(props);
  this.state = {
    height: window.innerHeight,
    width: window.innerWidth,
    pageID: 1,
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Subscrypto App.js</h1>
        </header>
        <p className="App-intro">
          Landing on this page is an error. Exit, please.
        </p>
      </div>
    );
  }
}

export default Welcome;
