import React, { Component } from 'react';
import{ Navbar, Nav, NavItem,  Button, MenuItem, Dropdown } from 'react-bootstrap';
import * as session from '../../session/session.js';

class NavBar extends Component{
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
          if (session.getUID == null){
            this.setState({loggedIn:false});
          }else{
            this.setState({loggedIn:true});
          }
        }
      
        componentDidMount(){
          window.addEventListener('resize', this.resize);
        }
      
        componentWillUnmount(){
          window.removeEventListener('resize', this.resize);
        }
      
        render() {
          return (
            <div style={{width: this.state.width}}>
              <div className="background" style={{width: window.innerWidth, height: window.innerHeight}}/>
                <Navbar className="navbar navbar-default navbar-fixed-top">
                   <Navbar.Brand>
                      <img src = {require('../../images/Subscrypto_title.png')} alt="Subscrypto Logo"/>
                  </Navbar.Brand>
                  {
                    this.state.loggedIn?
                      <Nav class="navbar-nav">
                        <NavItem eventKey={1} href="/*/dashboard" onClick={()=>this.props.history.push('/*/dashboard')}>
                          <p>Dashboard</p>
                        </NavItem>
                        <NavItem eventKey={2} href="/*/profile" onClick={()=>this.props.history.push('/*/profile')}>
                          <p>View Profile</p>
                        </NavItem>
                        <NavItem eventKey={3} href="/logout" onClick={()=>this.props.history.push('/*/add-account')}>
                          <p>Upload New Subscription</p>
                        </NavItem>
                        <NavItem eventKey={4} href="/logout" onClick={()=>this.props.history.push('/*/request-service')}>
                          <p>Request Subscription Service</p>
                        </NavItem>
                        <NavItem eventKey={5} href="/logout" onClick={()=>this.props.history.push('/welcome')}>
                          <b>Logout</b>
                        </NavItem>
                      </Nav>
                    :
                    <Nav class="navbar-nav">
                        <NavItem eventKey={3} href="/about" onClick={()=>this.props.history.push('/about')}>
                          <p> About </p>
                        </NavItem>
                        <NavItem eventKey={4} href="/signup" onClick={()=>this.props.history.push('/signup')}>
                          <p> Signup </p>
                        </NavItem>
                        <NavItem eventKey={5} href="/login" onClick={()=>this.props.history.push('/login')}>
                          <b> Login </b>
                        </NavItem>
                    </Nav>
                  }
              </Navbar>
            </div>
          );
        }
}

export default NavBar;