

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyAwdK44oSBI82ECPKRTE-MOUKvSh4E4-fY",
    authDomain: "moments-cd36b.firebaseapp.com",
    projectId: "moments-cd36b",
    storageBucket: "moments-cd36b.appspot.com",
    messagingSenderId: "754364220129",
    appId: "1:754364220129:web:2a20aca64d6044c3e1eda0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
 

  document.getElementById("login-button").addEventListener('click',function(){
    var loginEmail = document.getElementById("login-email").value;
    var loginPassword = document.getElementById("login-password").value;

//signing in...
 signInWithEmailAndPassword(auth, loginEmail, loginPassword)
 .then((userCredential) => {
   // Signed in 
   const user = userCredential.user.uid;
   document.getElementById("signup-div").style.display='none';
   document.getElementById("login-div").style.display="none";
   //++++++++we need to work here++++++++
   var id = JSON.stringify(userCredential.user.uid);

   sessionStorage.setItem('id',id);
   window.location.replace('home.html');
 
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   document.getElementById("signup-div").style.display='none';
   document.getElementById("login-div").style.display="none";
 });
});


//Just some code for hiding and showing login-div and signup-div...
document.getElementById("have-account").addEventListener('click',function(){
    document.getElementById("login-div").style.display='inline';
    document.getElementById("signup-div").style.display="none";
});

document.getElementById("create-account").addEventListener('click',function(){
    document.getElementById("signup-div").style.display='inline';
    document.getElementById("login-div").style.display="none";
});

