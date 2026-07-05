/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * main.js ist einstiegspunkt der App
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//SPiel starten
window.addEventListener("DOMContentLoaded", initGame);

//Initialisierung
function initGame() {
    console.log("Lernapp gestartet");
    registerRoomEvents();
    registerJournalEvents();
    loadGame();
    setLighting();
    updateUI();
    startAmbient();
}

function updateUI() {
    updateLevelSign();
    const journalOpen = !document.getElementById("journal-overlay").classList.contains("hidden");
    if (journalOpen) {
        updateJournal();
    }
    
}


function setLighting() {
    const hour = new Date().getHours();
    console.log("Lighting hour: ", hour);
    const lighting = document.getElementById("lighting");
    const light = document.getElementById("light");
    const darkness = document.getElementById("darkness");

    /*Default*/
    darkness.style.background = "rgba(0,0,0,0)";
    light.style.opacity = "0";

    if (hour >= 6 && hour < 18) {
        console.log("DAY");
        lighting.style.background = "rgba(255,255,255,0)"
    }
    else if (hour >= 18 && hour < 21) {
        console.log("Evening");
        lighting.style.background = "rgba(30,20,10,.35)";
        light.style.opacity = "0.15";
    }
    else {
        console.log("NIGHT");
        lighting.style.background = "rgba(0,0,0,.10)";
        darkness.style.background = "rgba(0,0,0,.75)";
        light.style.opacity = "0.25";
    }


}





