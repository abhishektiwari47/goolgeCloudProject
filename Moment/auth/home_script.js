// Start Exploring the auth folder from auth.html 


// Everything is same as we have done before...
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getDatabase, ref, get,child,onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyAwdK44oSBI82ECPKRTE-MOUKvSh4E4-fY",
    authDomain: "moments-cd36b.firebaseapp.com",
    projectId: "moments-cd36b",
    storageBucket: "moments-cd36b.appspot.com",
    messagingSenderId: "754364220129",
    appId: "1:754364220129:web:2a20aca64d6044c3e1eda0",
    
  };
 initializeApp(firebaseConfig);


  
  const db = getDatabase();

  // creating a function for getting data from database named as SelectData()
  function SelectData()
  {
    const dbref = ref(db);
  //running get function that we have imported above and getting the snapshot of the user's data
    get(child(dbref, "users/"+JSON.parse(sessionStorage.getItem("id")))).then((snapshot) => {
      if (snapshot.exists()) {
       //changing the innerHTML of some Elements of home.html equal to corresponding snapshot values
        document.getElementById("nameOfUser").innerHTML=snapshot.val().Name;
        document.getElementById("emailOfUser").innerHTML=snapshot.val().Email;
        document.getElementById("telOfUser").innerHTML=snapshot.val().Telephone;
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    
  }
// Calling the funtion that we just created....
  SelectData();

  // That's it auth folder has only these files, 
  // In these files home.html and home_script.js are created for testing the functionality of the webapp
  

  