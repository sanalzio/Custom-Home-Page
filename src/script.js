const clock = document.getElementById("clock");

clock.innerHTML = new Date().toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
setInterval(() => {
    clock.innerHTML = new Date().toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
}, 1000);
