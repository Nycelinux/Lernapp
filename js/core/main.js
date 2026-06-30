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
    setLighting();
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

function setLighting() {
    const hour = new Date().getHours();
    console.log("Lighting hour: ", hour);
    const lighting = document.getElementById("lighting");
    let color = "";
    if (hour >= 6 && hour < 18) {
        console.log("DAY");
        color = "rgba(255,255,255,0)"
    }
    else if (hour < 21) {
        console.log("Evening");
        color = "rgba(30,20,10,.35)";
    }
    else {
        console.log("NIGHT");
        color = "rgba(0,0,0,.65)";
    }
    lighting.style.background = color;
}




