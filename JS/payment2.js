
document.querySelector("form").addEventListener("submit", payment);

var hardCode = "000 111 222 333";
var cvvNum = "123"

function payment() {
    event.preventDefault();


    let cardNum = document.getElementById("cardNum").value;
    let cvv = document.getElementById("cvv").value;
    let exp_date = document.getElementById("date").value;
    let name = document.getElementById("name").value;



    if (hardCode !== cardNum || cvvNum !== cvv) {
        alert("Invalid card number or cvv")
    } else if (new Date(exp_date) < new Date()) {
        alert("Your card expired")
    } else {


        var otp = prompt("please enter otp: ");

        if (otp === "1234") {
            window.location.href = "thankyou.html";
            alert("payment is succesful")
        }
        else {
            alert("Wrong OTP")
        }
    }


}


