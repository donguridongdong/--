const CLOCK = document.querySelector("#clock");

function seeClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    CLOCK.innerText = `${hour}:${minute}:${seconds}`;
}
seeClock();
setInterval(seeClock, 1000);