const functions = require('firebase-functions');
const corse = require('cors')({origin: true});
import * as firebase from 'firebase';

exports.removeUser = functions.https.onRequest((req, res) => {

});

exports.sendConfirmationEmail = firebase.auth.user().onCreate(event  => {

})

exports.validateLoginCredentials = functions.https.onRequest((req, res) => {

});

exports.issueIdentityValidation = functions.https.onRequest((req, res) => {
    
});

exports.validateIdentity = functions.https.onRequest((req, res) => {
    
});

exports.startSession = functions.https.onRequest((req, res) => {
    
});

exports.endSession = functions.https.onRequest((req, res) => {
    
});