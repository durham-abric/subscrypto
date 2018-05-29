import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

class Footer extends Component{
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
          <div className="global-footer" style={{width: this.state.width}}>
              <Navbar className="navbar navbar-default navbar-fixed-bottom">
                 <Navbar.Brand>
                    <img src = {require('../../images/Subscrypto_coin.png')} alt="Subscrypto Logo"/>
                </Navbar.Brand>
            </Navbar>
          </div>);
        }
}

export default Footer;