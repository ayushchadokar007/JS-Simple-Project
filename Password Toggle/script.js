const btn = document.getElementById("btn");
const pwd = document.getElementById("pwd");

btn.onclick = () => {
    pwd.type = pwd.type == "password" ? "text" : "password";
}
