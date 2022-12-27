//  Start Exploring the auth folder from auth.html 

//Just some code for hiding and showing login-div and signup-div...
document.getElementById("have-account").addEventListener('click',function(){
  document.getElementById("login-div").style.display='inline';
  document.getElementById("signup-div").style.display="none";
});

document.getElementById("create-account").addEventListener('click',function(){
  document.getElementById("signup-div").style.display='inline';
  document.getElementById("login-div").style.display="none";
});

// This code is taken from firebase and IDK what is happening in lines before the LOGIN STUFF, so move on to LOGIN STUFF
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
  import {getDatabase, ref,set,child,update,remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAwdK44oSBI82ECPKRTE-MOUKvSh4E4-fY",
    authDomain: "moments-cd36b.firebaseapp.com",
    projectId: "moments-cd36b",
    storageBucket: "moments-cd36b.appspot.com",
    messagingSenderId: "754364220129",
    appId: "1:754364220129:web:2a20aca64d6044c3e1eda0"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

//###########################-----LOGIN STUFF-----#########################//


document.getElementById("login-button").addEventListener('click',function() {
    var loginEmail = document.getElementById("login-email").value;
    var loginPassword = document.getElementById("login-password").value;

// So if login button is clicked firebase will login the user using entered email and password....
 signInWithEmailAndPassword(auth, loginEmail, loginPassword)
 .then((userCredential) => {
//when user logs in a uid is created for him, which is helpful to identify him...
// The JSON.stringify() method converts a JavaScript value to a JSON string and we are storing this in a variable id... 
// I was not able to read the uid of the user, without this conversion...
   var id = JSON.stringify(userCredential.user.uid);
//  Then this id is stored in session storage which we can use anywhere in entire webapp... but only untill the tab is not closed
   sessionStorage.setItem('id',id);
//This code is used to replace the auth.html to home.html so that user cannot reture to loginpage without logout...
//The back button will not work after this...
   window.location.replace('home.html');
 
 })
 .catch((error) => {
//If some error occurs...
   const errorCode = error.code;
   const errorMessage = error.message;
   document.getElementById("signup-div").style.display='none';
   document.getElementById("login-div").style.display="none";
 });
});





//###########################-----SIGNUP STUFF-----#########################//


//This line is very important for using the firebase realtime database...
const db = getDatabase();

document.getElementById("signup-button").addEventListener('click',function() {
  var signupName = document.getElementById("signup-name").value;
  var signupTel = document.getElementById("signup-tel").value;
  var signupEmail = document.getElementById("signup-email").value;
  var signupPassword = document.getElementById("signup-password").value;

//Here we are creating a new user, once the user is created he is automatically logged in...
  createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
.then((userCredential) => {
 var id = JSON.stringify(userCredential.user.uid);
 sessionStorage.setItem('id',id);

 //Here the data is sent to the database after the user is created
 set(ref(db,"users/"+JSON.parse(sessionStorage.getItem("id"))),{
  Name:signupName,
  Email: signupEmail,
  Telephone:signupTel,
}).then(()=>{
  //After the data is sent we will move to home.html...
  window.location.replace('home.html');
}).catch((error)=>{
  alert("unsuccessful"+error);
});
})
.catch((error) => {
 const errorCode = error.code;
 const errorMessage = error.message;
//  document.getElementById("signup-div").style.display='none';
//  document.getElementById("login-div").style.display="none";
});
});

// Next move to the home.html




