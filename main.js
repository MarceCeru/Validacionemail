let inputemail = document.getElementById("email");
let button = document.getElementById("notify")

button.addEventListener("click", (event) => {
    event.preventDefault();
    validateemail(inputemail.value);
})

function validateemail(email) {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    if (expReg.test(email) == true) {
        inputemail.style.border = "1px solid blue";
        error.style.visibility = "hidden";
        inputemail.value = '';
    } else {
        inputemail.style.border = "1px solid red";
        error.style.visibility = "visible";
    }
}