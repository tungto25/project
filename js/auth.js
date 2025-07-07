
let dataAccount;
async function getAllAccount() {
    const data = await getAll(URL_ACCOUNT);
    dataAccount = data;
}
getAllAccount();
const signUp = document.getElementById("signup");
signUp.addEventListener("click", () => {
    const p = document.getElementById("error");
    const userName = document.getElementById("username").value;
    const userEmail = document.getElementById("email").value;
    const passWord = document.getElementById("password").value;
    const confimPassword = document.getElementById("confirmpass").value;
    const check = dataAccount.some(e => e.email == userEmail);
    const ermail = document.getElementById("checkEmail");
    if (check) {
        ermail.innerText = " Email da duoc su dung";
        return
    }
    if (passWord != confimPassword) {
        p.innerText = "mat khau không trùng khớp";
        return;
    }
    let account = {
        username: userName,
        email: userEmail,
        password: passWord,
    }
    add(URL_ACCOUNT, account);
    window.location.href = "login.html";
});
