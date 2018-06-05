// id=2
import React, { Component } from 'react';
import {Panel, Col, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';

class About extends Component{
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
                <ButtonToolbar className='btn-toolbar nav-button-bar' style={{display:'flex', justifyContent:'center'}}>
                   <Button className='btn about-nav-button clickable'><p className="about-nav-text">The Concept</p></Button>
                   <Button className='btn about-nav-button clickable'><p className="about-nav-text">The Coin</p></Button>
                   <Button className='btn about-nav-button clickable'><p className="about-nav-text">The Team</p></Button>
                </ButtonToolbar>
              </div>
              <div>
              <div className='content-wrapper center'>
              <div className = 'about-wrapper'>
                <div id='aboutConcept'>
                  <Panel classNa me='about-panel'>
                  <Panel.Heading><Panel.Title>Concept heading</Panel.Title></Panel.Heading>
                    <Panel.Body>Some default panel content here.</Panel.Body>
                  </Panel>
                </div>
                <div id='aboutCoin'>
                  <Panel className='about-panel'>
                    <Panel.Heading><Panel.Title>Coin heading</Panel.Title></Panel.Heading>
                    <Panel.Body>Some default panel content here.</Panel.Body>
                  </Panel>
                </div>
                <div id='aboutTeam' className='center'>
                  <Panel className='about-panel'>
                  <Panel.Heading><Panel.Title>Team heading</Panel.Title></Panel.Heading>
                    <Panel.Body>Some default panel content here.</Panel.Body>
                  </Panel>
                </div>
              </div>
              </div>
              </div>
            </div>
          );
        }
}

export default About;