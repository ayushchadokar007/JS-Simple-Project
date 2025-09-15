let time = document.getElementById("time");

function updateClock(){
    let now = new Date();
    time.innerText = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();