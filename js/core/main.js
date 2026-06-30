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




