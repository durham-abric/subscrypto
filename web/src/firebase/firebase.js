import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCB_dJ67SVUe7-8iRAFH8Ti-bzmxE33XCU",
    authDomain: "subscrypto-db.firebaseapp.com",
    databaseURL: "https://subscrypto-db.firebaseio.com",
    projectId: "subscrypto-db",
    storageBucket: "subscrypto-db.appspot.com",
    messagingSenderId: "937720565035"
  };

export const init=()=>{
    firebase.initializeApp(config);
    firebase.auth().languageCode = 'it';
}

export const logout =()=>{
    firebase.auth().signOut().then(function(){
    }).catch(()=>alert("Logout Failed"))
}