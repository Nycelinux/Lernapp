/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * particles.js
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function createParticle() {
    const room = document.getElementById("room");
    const particle = document.createElement("div");
    particle.className = "dust";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    room.appendChild(particle);
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

