const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginInfo = document.querySelector("#greeting")

function loginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    userLogin();
}

function userLogin() {
    const GETNAME = localStorage.getItem("username");
    loginForm.classList.add("hidden");
    loginInfo.classList.remove("hidden");
    loginInfo.innerText = `${GETNAME}님 반갑습니다.`;
}

const getName = localStorage.getItem("username");

if (getName === null) {
    loginForm.addEventListener("submit", loginSubmit);
}
else {
    userLogin();
}