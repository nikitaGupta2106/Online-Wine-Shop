const password = document.getElementById("password");
const passwordcheckbox = document.getElementById("showPasswordCheckbox");
passwordcheckbox.addEventListener("change", function () {
  if (passwordcheckbox.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

var storedData3 = localStorage.getItem("userinfo");
console.log(storedData3);
const signupbtn = document.getElementById("signUp-btn");
signupbtn.addEventListener("click", storelogin);
function storelogin() {
  event.preventDefault();
  let username = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let output = false;

  var storedData2 = JSON.parse(localStorage.getItem("userinfo"));
  console.log(storedData2 + " hi");
  if(storedData2){
    storedData2.map((elem) => {
      if (elem.email === email) {
        output = true;
        console.log(elem.email + " elem.username");
        console.log(email + " username")
      }
    })
    console.log(output);
  }
  if (output) {
    alert("There is already an account present with this email, please use another email!");
    resetForm();
  }
  else {
    if (email === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }

    let userinfo = {
      username: username,
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
    window.location.href = "./signin.html"
    resetForm();
  }
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("password").value = "";
  document.getElementById("email").value = "";
}

document.getElementById("signin").addEventListener("click", gotosignin);
function gotosignin() {
  window.location.href = "./signin.html"
}