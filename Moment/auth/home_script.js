
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  localStorage.clear();

  var uid=JSON.parse(sessionStorage.getItem("id"));
   const db = getDatabase();
  var nameOfCurrentUser;
  function SelectData()
  {
    const dbref = ref(db);
    console.log("users/"+JSON.parse(sessionStorage.getItem("id")));
    get(child(dbref, "users/"+JSON.parse(sessionStorage.getItem("id")))).then((snapshot) => {
      if (snapshot.exists()) {
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
  SelectData();
  console.log(uid);
  

  