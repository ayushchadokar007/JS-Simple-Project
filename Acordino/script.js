let button = document.getElementById("button");
let info = document.getElementById("info");

button.onclick = () =>{
    info.style.display = info.style.display === 'none' ? 'block' : 'none';
}