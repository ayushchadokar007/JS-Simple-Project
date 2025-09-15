let btn = document.getElementById("btn");

btn.onclick = () =>{
    let colors = ["red", "blue", "orange", "yello", "pink"];
    let idx = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[idx];
}