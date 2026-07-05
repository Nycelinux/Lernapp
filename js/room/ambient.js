/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ambient.js
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let ambientInterval = null;
function startAmbient() {
    if (ambientInterval) {
        clearInterval(ambientInterval);
    }
    ambientInterval = setInterval(updateAmbient, 1000);
}

function updateAmbient() {
    animateLamp();
    animateParticles();
    updateClock();
}