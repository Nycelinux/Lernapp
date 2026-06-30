/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * save speichert und lädt den Spielstand
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

//Spiel speichern
function saveGame() {
    const saveData = {
        player: player,
        version: CONFIG.VERSION
    }
    localStorage.setItem(CONFIG.SAVE_KEY, JSON.stringify(saveData));
    console.log("Spiel gespeichert!");
}

//SPiel laden
function loadGame() {
    const saveString = localStorage.getItem(CONFIG.SAVE_KEY);
    if (saveString == null) {
        console.log("kein Spielstand gefunden");
        return;
    }
    const saveData = JSON.parse(saveString);
    if (saveData.version !== CONFIG.VERSION) {
        console.log("Alter Spielstand erkannt!");
    }
    if (saveData.player) {
        Object.assign(player, saveData.player);
    }

    console.log("Spielstand geladen");
}


