const emailPat = new RegExp("[a-z0-9]+@[a-z]+.[a-z]+");
const btn = document.querySelector("#submit-email");
const input = document.querySelector("#email");
const error = document.querySelector(".error");

btn.addEventListener("click", (event) => {
    if(!emailPat.test(input.value)) {
        error.style.visibility = "visible";
    } else {
        error.style.visibility = "hidden";
    }
});