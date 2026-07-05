/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ambient.js
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let ambientInterval = null;
function startAmbient() {
    if (ambientInterval) {
        clearInterval(ambientInterval);
    }
    ambientInterval = setInterval(updateAmbient, 1000);
    updateAmbient();
}

function updateAmbient() {
    animateLamp();
    animateParticles();
    updateClock();
}

function animateLamp() {
    const light = document.getElementById("light");
    if (!light) return;
    const opacity = 0.28 + Math.random() * 0.06;
    light.style.opacity = opacity;
}

function animateParticles() {
    if (Math.random() > 0.45) {
        createParticle();
    }
}