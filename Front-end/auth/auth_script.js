const toggleButton =  document.getElementsByClassName("toggle-button")[0]
const navbarLinks =  document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active');
});

document.getElementById("have-account").addEventListener('click',function(){
    document.getElementById("login-div").style.display='inline';
    document.getElementById("signup-div").style.display="none";
  });
  
  document.getElementById("create-account").addEventListener('click',function(){
    document.getElementById("signup-div").style.display='inline';
    document.getElementById("login-div").style.display="none";
  });


  