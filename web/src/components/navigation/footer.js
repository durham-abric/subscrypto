import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

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
          <div>
              <Navbar className="navbar navbar-fixed-bottom">
                <img className="navbar-brand" src = {require('../../images/Subscrypto_coin.png')} alt="Subscrypto Logo"/>
              </Navbar>
          </div>);
        }
}

export default Footer;