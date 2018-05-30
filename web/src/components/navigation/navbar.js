import React, { Component } from 'react';
import{ Navbar, Nav, NavItem,  Button, MenuItem, Dropdown } from 'react-bootstrap';
import * as session from '../../session/session.js';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
          height: window.innerHeight,
          width: window.innerWidth,
          loggedIn: false,
          collapsed: false
        }
      }
      
        resize = () => {
          this.setState({width: window.innerWidth, height: window.innerHeight});
          this.state.width > 800 ? this.setState({collapsed:false}) : this.setState({collapsed:true});
        }
      
        componentWillMount(){
          if (session.getUID()){
            this.setState({loggedIn:true});
          }else{
            this.setState({loggedIn:false});
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
            <div>
              <div className="background" style={{width: window.innerWidth, height: window.innerHeight}}/>
                <Navbar className="navbar navbar-default navbar-fixed-top global-navbar">
                  <img className="navbar-brand" src = {require('../../images/Subscrypto_title.png')} alt="Subscrypto Logo"/>
                  {
                    this.state.loggedIn?
                      <Nav class="navbar-nav">
                        <NavItem eventKey={1} href="/*/dashboard" onClick={()=>this.props.history.push('/*/dashboard')}>
                          <p>Dashboard</p>
                        </NavItem>
                        <NavItem eventKey={2} href="/*/profile" onClick={()=>this.props.history.push('/*/profile')}>
                          <p>View Profile</p>
                        </NavItem>
                        <NavItem eventKey={3} href="/*/add-account" onClick={()=>this.props.history.push('/*/add-account')}>
                          <p>Upload New Subscription</p>
                        </NavItem>
                        <NavItem eventKey={4} href="/*/request-service" onClick={()=>this.props.history.push('/*/request-service')}>
                          <p>Request Subscription Service</p>
                        </NavItem>
                        <NavItem eventKey={5} href="/welcome" onClick={()=>this.props.history.push('/welcome').then(this.setState({loggedIn:false}))}>
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

        //abstract to habdle collapsed navbar - loop through correct Links to generate for navbar
        generateNavBar(loggedIn, collapsed) {
          const privateLinks = [
            {title:"Dashboard", eventKey:1, url:'/*/dashboard'},
            {title:"View Profile", eventKey:2, url:'/*/profile'},
            {title:"Upload Subscription", eventKey:3, url:'/*/add-account'},
            {title:"Request Subscription", eventKey:4, url:'/*/request-service'},
            {title:"Logout", eventKey:5, url:'/welcome'}
          ];

          const publicLinks = [
            {title:"About", eventKey:1, url:'/about'},
            {title:"Sign Up", eventKey:2, url:'/signup'},
            {title:"Login", eventKey:3, url:'/login'}
          ]

          return(
          collapsed?
            null
          :
              this.state.loggedIn?
              <Nav class="navbar-nav">
                <NavItem eventKey={1} href="/*/dashboard" onClick={()=>this.props.history.push('/*/dashboard')}>
                  <p>Dashboard</p>
                </NavItem>
                <NavItem eventKey={2} href="/*/profile" onClick={()=>this.props.history.push('/*/profile')}>
                  <p>View Profile</p>
                </NavItem>
                <NavItem eventKey={3} href="/*/add-account" onClick={()=>this.props.history.push('/*/add-account')}>
                  <p>Upload New Subscription</p>
                </NavItem>
                <NavItem eventKey={4} href="/*/request-service" onClick={()=>this.props.history.push('/*/request-service')}>
                  <p>Request Subscription Service</p>
                </NavItem>
                <NavItem eventKey={5} href="/welcome" onClick={()=>this.props.history.push('/welcome').then(this.setState({loggedIn:false}))}>
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
          );

        }
}

export default NavBar;