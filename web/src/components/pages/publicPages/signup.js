// id=4
import React, { Component } from 'react';
import {Panel, Form, FormGroup, Button, Row, Radio} from 'react-bootstrap';
//import ProgressBar from '../../subcomponents/progressBar.js'

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
          height: window.innerHeight,
          width: window.innerWidth,
          progress: 0,
          page: 0,
          userWallet: false,
          newUser:{
            firstName: null,
            lastName: null,
            phoneNumber: null,
            email: null,
            password: null,
            walletAddress: null
          }
        }

        this.walletAddressEntry = this.walletAddressEntry.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.backPage = this.backPage.bind(this);
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
          var progress = this.state.progress + '%';
          var progressText = progress + " Complete";
          return (
            <div>
              <div className='content-wrapper'>
                <Panel className='signup-panel' style={{marginLeft:'10%', marginRight:'10%'}}>
                  <Panel.Heading><h3> Signup for <b className='subscrypto'> Subscrypto </b></h3></Panel.Heading>
                  <Panel.Body>
                    <div className="progress">
                      <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow={this.state.progress}
                      aria-valuemin="0" aria-valuemax="100" style={{width:progress, backgroundColor:'rgb(231, 31, 31)'}}>
                      {progressText}
                      </div>
                    </div>
                    {this.signupPanel(this.state.page)}
                    {this.state.page>0?<Button onClick={this.backPage}><span className="glyphicon glyphicon-chevron-left"/></Button>:null}  
                    <Button onClick={this.handleButton}>{this.state.page<3?<span className="glyphicon glyphicon-chevron-right"/>:"Create Account"}</Button>
                  </Panel.Body>
                </Panel>
              </div>
            </div>);
        }

        signupPanel(page){
          switch(page){
            case 0:
              return(
                <div>
                <Form>
                  <FormGroup>
                    <label className='control-label'>First Name</label>
                    <input className='form-control' type='text' placeholder='John'/>
                 </FormGroup>
                 <FormGroup>
                    <label className='control-label'>Last Name</label>
                    <input className='form-control' type='text' placeholder='Doe'/>
                  </FormGroup>
                  <FormGroup>
                    <label className='control-label'>Date of Birth</label>
                    <input className='form-control' type='date'/>
                  </FormGroup>
                </Form>
                </div>
              );
            break;
            case 1:
              return(
              <div>
                <Form>
                  <FormGroup>
                    <label className='control-label'>Email Address</label>
                    <input className='form-control' type='email' placeholder="johndoe@mail.com"/>
                  </FormGroup>
                  <FormGroup>
                    <label className='control-label'>Phone Number</label>
                    <input className='form-control' type='tel' placeholder='(800) 123-4567'/>
                    <label style={{fontSize:'10px', color:'gray'}}>Your phone number will be used for account verification before login</label>
                  </FormGroup>
                </Form>
              </div>
              );
            break;
            case 2:
              return(
              <div>
                <Form>
                  <FormGroup>
                    <label className='control-label'>Password</label>
                    <input className='form-control' type='password'/>
                  </FormGroup>
                  <FormGroup>
                    <label className='control-label'>Confirm Password</label>
                    <input className='form-control' type='password'/>
                    <br/>
                    <label style={{fontSize:'10px', color:'gray'}}>Your password must be 8+ characters &amps; contain at least <u>one</u> numerical digit 
                      &amps; <u>one</u> special character [!, @, #, $, %, &amps;]</label>
                  </FormGroup>
                </Form>
              </div>
              );
            break;
            case 3:
              return(
              <div>
                <Form>
                  <FormGroup>
                    <ButtonGroup>
                      <Radio onClick={this.setState({userWallet:true})}>Enter an Existing Ethereum Wallet Address</Radio>
                      <Radio onClick={this.setState({userWallet:false})}>Generate New Ethereum Wallet</Radio>
                    </ButtonGroup>
                    <label style={{fontSize:'10px', color:'gray'}}>This ethereum wallet will be the deposit location for Subscryptons (ERC20 tokens) you earn</label>
                    <label style={{fontSize:'10px', color:'gray'}}>This ethereum wallet will also be the location from which Subscryptons are withdrawn when purchasing access to others' subscriptions</label>
                  </FormGroup>
                  {this.walletAddressEntry(this.state.userEntry)}
                </Form>
              </div>
              );
            break;
            case 4:
              return(
              <div>
                <Form>
                  <FormGroup>
                    <label className='control-label'>Email Address</label>
                    <input className='form-control' type='text' placeholder='John'/>
                  </FormGroup>
                  <FormGroup>
                    <label className='control-label'>Phone Number</label>
                    <input className='form-control' type='text' placeholder='Doe'/>
                    <label style={{fontSize:'10px', color:'gray'}}>Your phone number will be used for account verification before login</label>
                  </FormGroup>
                </Form>
              </div>
              );
            break;
          }
        }

        walletAddressEntry(userEntry){
          return(userEntry?
            <div>
              <FormGroup>
                <label className='control-label'>Ethereum Wallet Address (0x...)</label>
                <input className='form-control' type='text' placeholder='0xAAAAAAAAAAAAAAAAAAAA'/>
              </FormGroup>
              <FormGroup>
                <label className='control-label'>Confirem Ethereum Wallet Address</label>
                <input className='form-control' type='text' placeholder='0xAAAAAAAAAAAAAAAAAAAA'/>
                <label style={{fontSize:'10px', color:'gray'}}><b>Note:</b><b className='subscrypto'>Subscrypto</b> is NOT responsible for the entry of an incorrect ETH address</label>
                <label style={{fontSize:'10px', color:'gray'}}><b className='subscrypto'>Subscrypto</b> is NOT responsible for loss of any tokens sent to an incorrect address</label>
              </FormGroup>
            </div>
          :
              <FormGroup>
                <label className='control-label'>Check Ethers.js API</label>
              </FormGroup>
          );
        }

        handleButton(){
          var page = this.state.page;
          page<3?this.setState({page: ++page}):null;

        }

        backPage(){
          var page = this.state.page;
          page>0?this.setState({page: --page}):null;
        }
}

export default Signup;