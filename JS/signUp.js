const password = document.getElementById("password");
const passwordcheckbox=document.getElementById("showPasswordCheckbox");
passwordcheckbox.addEventListener("change", function() {
    if (passwordcheckbox.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  });


  const signupbtn=document.getElementById("signUp-btn");
  signupbtn.addEventListener("click", storelogin);
  function storelogin(){
    let username=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
      }

    let userinfo={
        username : username,
        email: email,
        password: password
    }
    var storedData = localStorage.getItem("userinfo");
    event.preventDefault();
    
    if (storedData) {
      var existingData = JSON.parse(storedData);
      existingData.push(userinfo);
      localStorage.setItem("userinfo", JSON.stringify(existingData));
    } 
    
    else {
      var newData = [userinfo];
      localStorage.setItem("userinfo", JSON.stringify(newData));
    }

    alert("signup successfull");
    window.location.href="./signin.html"
    resetForm();
  }

  function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";
  }

  document.getElementById("signin").addEventListener("click",gotosignin);
  function gotosignin(){
    window.location.href="./signin.html"
  }