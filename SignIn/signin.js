const password = document.getElementById("password");
const passwordcheckbox=document.getElementById("showPasswordCheckbox");
passwordcheckbox.addEventListener("change", function() {
    if (passwordcheckbox.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  });

  document.getElementById("signup").addEventListener("click",gotosignup);
  function gotosignup(){
    window.location.href="../SignUp/signUp.html"
  }

  const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      

      const users = JSON.parse(localStorage.getItem("userinfo"));
      let loggedIn = false;
      if (email === "" || password === "") {
        alert("Please fill in all fields.");
      }

   else if (Array.isArray(users) && users.length > 0) {
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.email === email && user.password === password) {
        loggedIn = true;
        break;
      }
    }
  }

  else if (loggedIn) {
    alert("Login successful");
  } else {
    alert("Invalid email or password");
  }
    });