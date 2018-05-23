import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import Navigation from './components/navigation/navbar.js';
import Footer from './components/navigation/footer.js';
import About from './components/pages/publicPages/about.js';
import Login from './components/pages/publicPages/login.js';
import Signup from './components/pages/publicPages/signup.js';
import Welcome from './components/pages/publicPages/welcome.js';
import Profile from './components/pages/privatePages/profile.js';
import RequestService from './components/pages/privatePages/requestService.js';
import AddAccount from './components/pages/privatePages/addAccount.js';
import Dashboard from './components/pages/privatePages/dashboard.js';
import Oops from './components/pages/publicPages/oops.js';
import * as Firebase from './firebase/firebase.js';

//Configure database connection 
Firebase.init();

const HandleError = () => (
    <Redirect to={"/oops"}/>
);

ReactDOM.render(

<div>
    <Navigation/>
    <Router>
        <Switch>
            <Route exact path="/welcome" component={Welcome}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/oops" component={Oops}/>
            <Route exact path="/*/dashboard" component={Dashboard}>
                <Route exact path="/*/profile" component={Profile}/>
                <Route exact path="/*/add-account" component={AddAccount}/>
                <Route exact path="/*/request-service" component={RequestService}/>
            </Route>
            <Route path="/*" component={HandleError}/>
        </Switch>
    </Router>
    <Footer/>
</div>,
document.getElementById('root'));


registerServiceWorker();
