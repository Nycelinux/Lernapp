/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * main.js ist einstiegspunkt der App
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//SPiel starten
window.addEventListener("DOMContentLoaded", initGame);

//Initialisierung
function initGame() {
    console.log("Lernapp gestartet");
    registerRoomEvents();
    registerUIEvent();
    loadGame();
    updateUI();
    setLighting();
}

function updateUI() {
    updateLevelSign();
    updateProfile();
}

//Profilefenster
function registerUIEvent() {
    const sign = document.getElementById("player-sign");
    const profile = document.getElementById("profile-window");
    const closeProfile = document.getElementById("close-profile");

    sign.addEventListener("click", () => {
        profile.classList.remove("hidden");
    });

    closeProfile.addEventListener("click", () => {
        profile.classList.add("hidden");
    });
}

function setLighting() {
    const hour = new Date().getHours();
    const lighting = document.getElementById("lighting");
    if (hour >= 6 && hour < 18) {
        lighting.style.background = "var(--sky-day)";
    }
    else if (hour < 21) {
        lighting.style.background = "var(--sky-evening)";
    }
    else {
        lighting.style.background = "var(--sky-night)";
    }
}




