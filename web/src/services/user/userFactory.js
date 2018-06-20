import * as firebase from 'firebase';
import {Timestamp} from 'firebase';
 
class UserFactory{
   
    newUser(email, password, firstName, lastName, dob, phoneNumber, walletAddress){
 
        const errorMsg = "Something went wrong:\nTry signing up again!";
        const successMsg = "Your account has been created:\nThanks for signing up!";
 

        var authReponse = this.createUserAuth(email, password);
 
        if(authReponse.created){
            if(!authReponse.signedOut){
                Console.log("New user not signed out - retrying firebase.auth().signOut() in UserFactory.newUser()");
                firebase.auth().signOut().catch(function(error){
                    firebase.auth.currentUser.delete().catch(function(){
                        Console.log("Retry firebase.auth().signOut() in UserFactory.newUser() FAILED - return {success:false, message: errorMsg}\n "
                                    + error.message);
                        return {success:false, message: errorMsg};
                    })
                });
            }
 
            var profileSaved = this.saveUserProfile(authReponse.id, firstName, lastName, dob, phoneNumber, walletAddress);
 
            if(!profileSaved){
                Console.log("New user profile not saved to  database - user AUTH profile being deleted");
                admin.auth().deleteUser(authReponse.id).then(function(){
                    return {success:false, message: errorMsg};
                }).catch(function(error){
                    Console.log("User AUTH profile being deleted - FAILED");
                    return {success:false, message: errorMsg};
                })
            }
 
            return {success:true, message: successMsg};
 
        }else{
            return {success: false, error: authReponse.error};
        }
       
    }
 
    createUserAuth(email, password){
 
        var auth = firebase.auth();
        auth.createUserWithEmailAndPassword(email, password).catch(function(error){
            console.log("Error in UserFactory.createUserAuth().createUserWithEmailAndPassword(): " + error);
            return {created: false, error: error.message};
        });
 
        var user = auth.currentUser;
        var uid = user.uid;
        console.log("User AUTH created in UserFactory.createUserAuth() with\n"
                   + "EMAIL: "  + email + "\n"
                   + "UID: " + uid);
 
        auth.signOut().catch(function(error){
            console.log("Error in UserFactory.createUserAuth().signOut(): " + error);
            return {created: true, signedOut: false, error: error.message, id: uid};
        });
 
        return {created: true, signedOut: true, id: uid};
    }
 
    saveUserProfile(uid, firstName, lastName, dob, phoneNumber, walletAddress){
 
        var users = firebase.firestore().collection('/users');
 
        var dobObject = new Date(dob.substring(0,4), dob.substring(5,7), dob.substring(8,10));
        var dobTimestamp = Timestamp(dobObject);
 
        var newUserDoc = {
          active: true,
          dob: dobTimestamp,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          uid: uid,
          walletAddress: walletAddress,
          firstVisit: null
        };
 
        users.add(newUserDoc).then(function(docRef){
            console.log("Document written to /users/"+docRef.id+" with content: \n"
                        + newUserDoc);
        })
        .then(() => {return true})
        .catch(function(error){
            console.log("Error in UserFactory.saveUserProfile(){users.add(newUserDoc)}: " + error);
            return false;
        });
    }
 
}
 
export default UserFactory;