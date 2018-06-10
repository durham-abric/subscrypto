// id=3

import React, { Component } from 'react';
import {Panel, Form, FormGroup, Button, Modal} from 'react-bootstrap';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
          height: window.innerHeight,
          width: window.innerWidth,
          credentialsEntered: false,
          credentialsValidated: false,
          popupOpen: false,
          email: null,
          password: null,
          validUID: null,
          codeEntered: null,
          validationLevel: 0 //0 -> No validation, 1 -> credentials verifies, 2 -> Identity verified (SMS)
        }

        this.handleButton = this.handleButton.bind(this);
        this.loginPanel = this.loginPanel.bind(this);
        this.popupBody = this.popupBody.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.openPopup = this.openPopup.bind(this);

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
            <div className='content-wrapper'>
              <div id='panel'>
              <Panel className='login-panel' style={{marginLeft:'10%', marginRight:'10%'}}>
                <Panel.Heading><h3> Login to <b className='subscrypto'> Subscrypto </b></h3></Panel.Heading>
                <Panel.Body>
                  {this.loginPanel(this.state.validationLevel)}
                </Panel.Body>
              </Panel>
              </div>
              <Modal>
                {this.popupBody(this.state.popupOpen)}
              </Modal>
            </div> 
          </div>);
        }

        loginPanel(validation){
          switch(validation){
            case 0:
              return(
              <Form>
                <FormGroup>
                  <label className="control-label">Email Address</label>
                  <input className='form-control' type='email' placeholder="johndoe@mail.com" onChange={(e)=>this.setState({email:e.target.value})}></input>
                </FormGroup>
                <FormGroup>
                  <label className="control-label">Password</label>
                  <input className="form-control" type='password' onChange={(e)=>this.setState({password:e.target.value})}></input>
                </FormGroup>
                <FormGroup>
                  <Button className='clickable primary' onClick={this.handleButton(this.state.validationLevel)}>Login</Button>
                </FormGroup>
              </Form>);
            case 1:
              return(
              <Form>
                <FormGroup>
                  <label className="control-label">Password</label>
                  <input className="form-control" type='text' onChange={(e)=>this.setState({codeEntered:e.target.value})}></input>
                </FormGroup>
                <FormGroup>
                  <Button className='clickable primary' onClick={this.handleButton(this.state.validationLevel)}>Login</Button>
                </FormGroup>
              </Form>);
          }
        }

        popupBody(validation){
          switch(validation){
            case 0:
            return(
              <div>
                 <Modal.Header>
                    <h4>Error</h4>
                  </Modal.Header>
                  <Modal.Body>
                    <p>You should not be seeing this display.</p>
                    <p>Your credentials have not been verified.</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className='primary' onClick={this.closePopup}>Close</Button>
                  </Modal.Footer>
              </div>);
            case 1:
              return(
                <div>
                  <Modal.Header>
                    <h4>Your <b className='subscrypto'>Subscrypto</b> credentials have been verified!</h4>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Before accessing your <b className='subscrypto'>Subscrypto</b> dashboard you must verify your identity.</p>
                    <p>Check the phone number associated with your account &amp; enter the 6-digit verification code to finish logging in.</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className='primary' onClick={this.closePopup}>Okay</Button>
                  </Modal.Footer>
                </div>);
            case 2:
              return(
                <div>
                  <Modal.Header>
                    <h4>Your <b className='subscrypto'>Subscrypto</b> access code has been verified!</h4>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Welcome to <b className='subscrypto'>Subscrypto</b>!</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className='primary' onClick={this.closePopup.then(this.handleButton)}>Close</Button>
                  </Modal.Footer>
                </div>);
          }
        }

        closePopup(){
          this.setState({popupOpen: false});
        }

        openPopup(){
          this.setState({popupOpen: true});
        }

        //NEEDS IMPLEMENTATION
        handleButton(validation){
          switch(validation){
            case 0:
              //check if user credentials exist
              var email = this.state.email;
              var password = this.state.password;
              
            break;
            case 1:
              //check if correct access code entered
              var code = this.state.codeEntered;
              
            break;
            case 2:
              this.props.history.push('/*/bashboard');

            break;
          }
        }
}

export default Login;