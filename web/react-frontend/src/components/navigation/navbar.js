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
        }
      }
      
        resize = () => {
          this.setState({width: window.innerWidth, height: window.innerHeight});
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
              <div className='background' style={{width: window.innerWidth, height: window.innerHeight}}/>
                <Navbar className="navbar navbar-fixed-top">
                  <div className="navbar-header">
                    <img className="navbar-brand" src = {require('../../images/Subscrypto_title.png')} alt="Subscrypto Logo"/>
                    <button type="button" class="navbar-toggle clickable" data-toggle="collapse" data-target="#navbarNav">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>                        
                     </button>
                  </div>
                  {
                    this.state.loggedIn?
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <Nav class="navbar-nav">>
                        <NavItem className='clickable' eventKey={1} href="/*/dashboard" onClick={()=>this.props.history.push('/*/dashboard')}>
                          <p>Dashboard</p>
                        </NavItem>
                        <NavItem className='clickable' eventKey={2} href="/*/profile" onClick={()=>this.props.history.push('/*/profile')}>
                          <p>View Profile</p>
                        </NavItem>
                        <NavItem className='clickable' eventKey={3} href="/*/add-account" onClick={()=>this.props.history.push('/*/add-account')}>
                          <p>Upload New Subscription</p>
                        </NavItem>
                        <NavItem className='clickable' eventKey={4} href="/*/request-service" onClick={()=>this.props.history.push('/*/request-service')}>
                          <p>Request Subscription Service</p>
                        </NavItem>
                      </Nav>
                      <Nav className="navbar-nav navbar-right">
                        <NavItem className='clickable' eventKey={5} href="/welcome" onClick={()=>this.props.history.push('/welcome').then(this.setState({loggedIn:false}))}>
                          <b><span className="glyphicon glyphicon-log-out"/>Logout</b>
                        </NavItem>
                      </Nav>
                    </div>
                    :
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <Nav className="navbar-nav">
                        <NavItem className='clickable' eventKey={3} href="/about" onClick={()=>this.props.history.push('/about')}>
                          <p> About </p>
                        </NavItem>
                        <NavItem className='clickable' eventKey={4}>
                          <p> Whitepaper </p>
                        </NavItem>
                      </Nav>
                      <Nav className="navbar-nav navbar-right">
                        <NavItem className='clickable' eventKey={5} href="/signup" onClick={()=>this.props.history.push('/signup')}>
                          <p><span className="glyphicon glyphicon-user"/> Signup </p>
                        </NavItem>
                        <NavItem className='clickable' eventKey={6} href="/login" onClick={()=>this.props.history.push('/login')}>
                          <p><span className="glyphicon glyphicon-log-in"/> Login </p>
                        </NavItem>
                    </Nav>
                  </div>
                  }
              </Navbar>
            </div>
          );
        }
        
}

export default NavBar;