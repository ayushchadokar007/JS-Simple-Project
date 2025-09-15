let add = document.getElementById("add");
let subs = document.getElementById("subs");

let count = 0;
add.onclick = () =>{
    count += 1;
    document.getElementById("count").innerText = count;
}

subs.onclick = () =>{
    count -= 1;
    document.getElementById("count").innerText = count;
}