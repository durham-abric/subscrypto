// id=4
import React, { Component} from 'react';
import {Panel, Form, FormGroup, ButtonGroup, Button, Row, Radio, Modal} from 'react-bootstrap';
//import ProgressBar from '../../subcomponents/progressBar.js'

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
          height: window.innerHeight,
          width: window.innerWidth,
          progress: 0,
          page: 0,
          userWallet: true,
          accountCreatedPopup: false,
          newUser:{
            firstName: null,
            lastName: null,
            dob: null,
            phoneNumber: null,
            email: null,
            password: null,
            passwordConfirm: null,
            walletAddress: null,
            walletAddressConfirm: null
          }
        }

        this.createAccount = this.createAccount.bind(this);
        this.walletAddressEntry = this.walletAddressEntry.bind(this);
        this.signupPanel = this.signupPanel.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.backPage = this.backPage.bind(this);
        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
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
                <div id='panel'>
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
                    {this.state.page>0?<Button className='clickable' onClick={this.backPage}><span className="glyphicon glyphicon-chevron-left"/></Button>:null}  
                    <Button className='primary clickable' onClick={this.handleButton} style={{height:'34px'}}>{this.state.page<4?<span className="glyphicon glyphicon-chevron-right"/>:<p>Confirm &amp; Create Account</p>}</Button>
                  </Panel.Body>
                </Panel>
                </div>
                <div id='popup'>
                  <Modal show={this.state.accountCreatedPopup} onHide={this.closePopup}>
                    <Modal.Header>
                      <h4>Your account has been created!</h4>
                    </Modal.Header>
                    <Modal.Body>
                      <p>You must verify your account in your email before accessing <b className='subscrypto'>Subscrypto</b>...</p>
                      <p>Stay tuned for news &amp; updates before the application launches!</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button className='primary clickable' onClick={this.closePopup}>Sounds Good!</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
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
                    <input className='form-control' type='text' placeholder='John' onChange={(e)=> this.setState({newUser:{...this.state.newUser, firstName: e.target.value}})}/>
                 </FormGroup>
                 <FormGroup>
                    <label className='control-label'>Last Name</label>
                    <input className='form-control' type='text' placeholder='Doe' onChange={(e)=> this.setState({newUser:{...this.state.newUser, lastName: e.target.value}})}/>
                  </FormGroup>
                  <FormGroup>
                    <label className='control-label'>Date of Birth</label>
                    <input className='form-control' type='date' onChange={(e)=> this.updateDOB(e)}/>
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
                    <input className='form-control' type='email' placeholder="johndoe@mail.com" onChange={(e)=> this.setState({newUser:{...this.state.newUser, email: e.target.value}})}/>
                  </FormGroup>
                  <FormGroup>
                    <label className='control-label'>Phone Number</label>
                    <input className='form-control' type='tel' placeholder='(800) 123-4567' onChange={(e)=> this.setState({newUser:{...this.state.newUser, phoneNumber: e.target.value}})}/>
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
                    <input className='form-control' type='password' onChange={(e)=> this.setState({newUser:{...this.state.newUser, password: e.target.value}})}/>
                  </FormGroup>
                  <FormGroup>
                    <label className='control-label'>Confirm Password</label>
                    <input className='form-control' type='password' onChange={(e)=> this.setState({newUser:{...this.state.newUser, passwordConfirm: e.target.value}})}/>
                    <br/>
                    <label style={{fontSize:'10px', color:'gray'}}>Your password must be 8+ characters &amp; contain at least <u>one</u> numerical digit 
                      &amps; <u>one</u> special character [!, @, #, $, %, &amp;]</label>
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
                      <Radio className='clickable' onClick={()=>this.setState({userWallet:true})}>Enter an Existing Ethereum Wallet Address</Radio>
                      <Radio className="disabled" onClick={()=>this.setState({userWallet:false})}>Generate New Ethereum Wallet</Radio>
                    </ButtonGroup>
                    <br/>
                    <label style={{fontSize:'10px', color:'gray'}}>This ethereum wallet will be the deposit location for Subscryptons (ERC20 tokens) you earn</label><br/>
                    <label style={{fontSize:'10px', color:'gray'}}>This ethereum wallet will also be the location from which Subscryptons are withdrawn when purchasing access to others' subscriptions</label>
                  </FormGroup>
                  {this.walletAddressEntry(this.state.userWallet)}
                </Form>
              </div>
              );
            break;
            case 4:
              var name = this.state.newUser.firstName + " " +this.state.newUser.lastName;
              var birthday = this.state.newUser.dob;
              var email = this.state.newUser.email;
              var phone = this.state.newUser.phoneNumber;
              var password = this.state.newUser.password;
              var address = this.state.newUser.walletAddress;
              return(
              <div>
                <Form>
                  <h4> Review &amp; Confirm Account Details </h4>
                  <FormGroup>
                    <label className='control-label'>Name</label>
                    <input type="text" readonly className="form-control disabled" value={name}/>          
                  </FormGroup>
                  <FormGroup>
                    <label className='control-label'>Date of Birth</label>
                    <input type="text" readonly className="form-control disabled" value={birthday}/>          
                  </FormGroup>
                  <FormGroup>
                    <label className='control-label'>Email Address</label>
                    <input type="text" readonly className="form-control disabled" value={email}/>          
                  </FormGroup>
                  <FormGroup>
                    <label className='control-label'>Phone Number</label>
                    <input type="text" readonly className="form-control disabled" value={phone}/>          
                  </FormGroup>
                  <FormGroup>
                    <label className='control-label'>Password</label>
                    <input type="text" readonly className="form-control disabled" value={password}/>          
                  </FormGroup>
                  <FormGroup>
                    <label className='control-label'>Wallet Address</label>
                    <input type="text" readonly className="form-control disabled" value={address}/>          
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
                <label className='control-label'>Ethereum Wallet Address</label>
                <input className='form-control' type='text' placeholder='0xAAAAAAAAAAAAAAAAAAAA' onChange={(e)=> this.setState({newUser:{...this.state.newUser, walletAddress: e.target.value}})}/>
              </FormGroup>
              <FormGroup>
                <label className='control-label'>Confirm Ethereum Wallet Address</label>
                <input className='form-control' type='text' placeholder='0xAAAAAAAAAAAAAAAAAAAA' onChange={(e)=> this.setState({newUser:{...this.state.newUser, walletAddressConfirm: e.target.value}})}/>
                <label style={{fontSize:'10px', color:'gray'}}><b className='subscrypto'>Subscrypto</b> is NOT responsible for the entry of an incorrect ETH address</label><br/>
                <label style={{fontSize:'10px', color:'gray'}}><b className='subscrypto'>Subscrypto</b> is NOT responsible for loss of any tokens sent to an incorrect address</label>
              </FormGroup>
            </div>
          :
              <FormGroup>
                <label className='control-label'>Check Ethers.js API</label>
              </FormGroup>
          );
        }
        updateDOB(e){
          e.persist();
          this.setState({newUser:{...this.state.newUser, dob: e.target.value}});
        }

        handleButton(){
          var page = this.state.page;
          var progress = this.state.progress;

          const nameRegex = /^[A-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/;
          const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
          const phoneRegex = /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/g;
          const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
          const addressRegex = /^0x[a-f, A-F, 0-9]{20}$/;
          const passwordRegex = /^(([A-Za-z]+[!,@,#,$,%,&]*){8})/; //double check

          switch(page){
            case 0:
              var firstNameValid = nameRegex.test(this.state.newUser.firstName);
              var lastNameValid = nameRegex.test(this.state.newUser.lastName);
              var dob = (dob != null) ? new Date(this.state.newUser.dob.substring(0,4), this.state.newUser.dob.substring(5,7), this.state.newUser.dob.substring(8,10)):null;
              var dobValid = dateRegex.test(this.state.newUser.dob);
              var today = new Date();
              var olderThan18; 

              if(dob && this.state.newUser.firstName && this.state.newUser.lastName){
              if((today.getFullYear() - dob.getFullYear()) > 18){
                olderThan18 = true;
              }else if((today.getFullYear() - dob.getFullYear()) == 18){
                if(today.getMonth() > dob.getMonth()){
                  olderThan18 = true;
                }else if (today.getMonth() == dob.getMonth()){
                  if(today.getDay() >= dob.getDay()){
                    olderThan18 = true;
                  }else{
                    olderThan18 = false;
                  }
                }else{
                  olderThan18 = false;
                }
              }else{
                  olderThan18 = false;
              }

              if(firstNameValid && lastNameValid && dobValid){
                this.setState({page: ++page});
                this.setState({progress: progress+=25});
              }else{ 
                var alertText = "Error: INVALID INPUT\n";
                !firstNameValid? alertText+="* Reformat 'First Name' [must begin with capital & contain only letters]\n":null;
                !lastNameValid? alertText+="* Reformat 'Last Name' [must begin with capital & contain only letters]\n":null;
                !dobValid? alertText+="* Choose or enter valid 'Date of Birth'":null;
                window.alert(alertText);

                //Immediately redirect to home if user is not 18 years old
                if(!olderThan18 && lastNameValid && firstNameValid && dobValid){
                  window.alert("Sorry! You must be 18 years old to use Subscrypto...");
                  this.props.history.push("/");
                }
              }

            }else{
              window.alert("Error: INVALID INPUT\n* Must fill all requested fields before proceeding")
            }
  
              break;
            case 1:

              //Should also check whether an account w/ same email already exists or not
              
              var emailValid = emailRegex.test(this.state.newUser.email);
              var phoneValid = phoneRegex.test(this.state.newUser.phoneNumber);
              if(emailValid && phoneValid){
                this.setState({page: ++page});
                this.setState({progress: progress+=25});
              }else{
                var alertText = "Error: INVALID INPUT\n";
                !emailValid? alertText+="* Enter a valid 'Email Address'\n":null;
                !phoneValid? alertText+="* Enter a valid 'Phone Number' or reformat as suggested [(###) ###-####]\n":null;
                window.alert(alertText);
              }
            break;
            case 2:
              if(!this.state.newUser.password.equals(this.state.newUser.passwordConfirm)){
                alert("Passwords do not match! Try again...");
              }

              var passwordValid = passwordRegex.test(this.state.newUser.password);
              if(passwordValid){
                this.setState({page: ++page});
                this.setState({progress: progress+=25});
              }else{
                var alertText = "Error: INVALID INPUT\n";
                !passwordValid? alertText+="* 'Password' does not meet required format\n":null;
                window.alert(alertText);
              }
            break;
            case 3:
            //STOPPEd HERE
              if(!this.state.newUser.walletAddress.equals(this.state.newUser.walletAddressConfirm)){
                window.alert("Ethereum wallet adresses do not match! Try again...");
              }

              var walletValid = addressRegex.test(this.state.newUser.walletAddress);
              if(walletValid){
                this.setState({page: ++page});
                this.setState({progress: progress+=25});
              }else{
                var alertText = "Error: INVALID INPUT\n";
                !passwordValid? alertText+="* 'Wallet Address' does not meet required format & is invalid\n":null;
                window.alert(alertText);
              }
            break;
            case 4:
              this.createAccount();
            break;
          }
        }

        backPage(){
          var page = this.state.page;
          var progress = this.state.progress;
          if(page > 0){
            this.setState({page: --page});
            this.setState({progress: progress-=25});
          }
        }

        createAccount(){
          //Use firebase functions to create the account
          this.setState(
            {
              ...this.state,
              progress: 0,
              page: 0,
              userWallet: true,
              newUser:{
                firstName: null,
                lastName: null,
                phoneNumber: null,
                email: null,
                password: null,
                passwordConfirm: null,
                walletAddress: null,
                walletAddressConfirm: null
              }
            }
          );
          this.openPopup();
        }

        openPopup(){
          this.setState({accountCreatedPopup: true});
        }

        closePopup(){
          this.setState({accountCreatedPopup: false});
        }
}

export default Signup;