const clock = document.getElementById("clock");

clock.innerHTML = new Date().toLocaleTimeString();
setInterval(() => {
    clock.innerHTML = new Date().toLocaleTimeString();
}, 1000)