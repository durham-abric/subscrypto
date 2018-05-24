import React, { Component } from 'react';
import{ Navbar, Nav, NavItem } from 'react-bootstrap';

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
                <Navbar className="navbar">
                  <Navbar.Header>
                   <Navbar.Brand>
                      <img src = {require('../../images/Subscrypto_title.png')} alt="Subscrypto Logo" width="300" height="75" onClick={()=>this.props.history.push('/welcome')}/>
                  </Navbar.Brand>
                   <Navbar.Toggle/>
                  </Navbar.Header>
                  {
                    this.state.loggedIn ?
                      <Nav pullRight>
                        <NavItem eventKey={1} href="/*/dashboard" onClick={()=>this.props.history.push('/*/dashboard')}>
                          <p> Dashboard </p>
                        </NavItem>
                        <NavItem eventKey={2} href="/login" onClick={()=>this.props.history.push('/login')}>
                        <p> Logout </p>
                        </NavItem>
                      </Nav>
                    :
                      <Nav pullRight>
                        <NavItem eventKey={3} href="/about" onClick={()=>this.props.history.push('/about')}>
                          <p> About </p>
                        </NavItem>
                        <NavItem eventKey={4} href="/signup" onClick={()=>this.props.history.push('/signup')}>
                          <p> Signup </p>
                        </NavItem>
                        <NavItem eventKey={5} href="/login" onClick={()=>this.props.history.push('/login')}>
                          <p> Login </p>
                        </NavItem>
                      </Nav>
                  }
              </Navbar>
            </div>
          );
        }
}

export default NavBar;