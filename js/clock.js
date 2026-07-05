/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * clock.js
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function updateClock() {
    const clock = document.getElementById("clock");
    if (!clock) return;
    clock.innerText = new Date().toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit"
    });
}