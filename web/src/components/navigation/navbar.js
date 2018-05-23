import React, { Component } from 'react';

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
          return (<div/>);
        }
}

export default NavBar;