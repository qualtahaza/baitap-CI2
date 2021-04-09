function letSignin() {
    let username = document.getElementById("usernamebox").value;
    let password = document.getElementById("passwordbox").value;
    if (username == "" && password == "") {
        alert("Please input username and password")
    } else if (password == "") {
        alert("Please input password");
    } else if (username == "") {
        alert("Please input username")
    } else {
        alert("Sign in successfully")
    }

}