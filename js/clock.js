/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * clock.js
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function updateClock() {
    document.getElementById("clock").innerText = new Date().toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit"
    });
}