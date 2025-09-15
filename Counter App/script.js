let add = document.getElementById("add");
let subs = document.getElementById("subs");
let count = 0;

function counter(){
    document.getElementById("count").innerText = count;
}

function increase(){
    count += 1;
    counter();
}

function decrease(){
    count -= 1;
    counter();
}

add.addEventListener("click", increase);
subs.addEventListener("click", decrease);

