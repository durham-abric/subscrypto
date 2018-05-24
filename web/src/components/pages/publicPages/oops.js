// id=9

import React, { Component } from 'react';

class Oops extends Component{
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
            <div>
                <h1 color="red">Oops!</h1>
                <br/>
                <h2>You weren't supposed to end up here!</h2>
            </div>
            </div>
        );
        }
}
export default Oops;