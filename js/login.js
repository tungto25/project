let dataAccount;
async function getAllAccount() {
    const data = await getAll(URL_ACCOUNT);
    dataAccount = data;
}

const login = document.getElementById("loginhh");
login.addEventListener("click", () => {

    const userNamelogin = document.getElementById("usernamelogin").value;
    const passWordlogin = document.getElementById("passwordlogin").value;

    const aclogin = dataAccount.find(e => e.email == userNamelogin && e.password == passWordlogin);
    if (!aclogin) {
        alert("mat khau hoac ten dang nhap ko dung");
        return;
    }
    window.location.href = "slide.html";
})
getAllAccount();
