function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        alert("Login Successful!");
    } else {
        document.getElementById("error").innerHTML = "Wrong Username or Password!";
    } <
    script src = "script.js" > < /script>
}