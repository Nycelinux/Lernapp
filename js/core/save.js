/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * save speichert und lädt den Spielstand
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

//Spiel speichern
function saveGame() {
    const saveData = {
        version: CONFIG.VERSION,
        player,
        statistics,
        quests,
        achievements,
        inventory,
        pets,
        decorations,
        plants,
        worldObjekte

    };
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
        console.log("PLAYER AFTER:", player);
    }
    if (saveData.statistics) {
        Object.assign(statistics, saveData.statistics);
        console.log("Stats AFTER:", statistics);
    }

    if (saveData.quests) {
        saveData.quests.forEach(savedQuest => {
            const quest = quests.find(q => q.id === savedQuest.id);
            if (quest) {
                quest.completed = savedQuest.completed;
                quest.rewardClaimed = savedQuest.rewardClaimed;
            }
        });
    }

    if (saveData.achievements) {
        saveData.achievements.forEach(savedArchievement => {
            const achievement = achievements.find(a => a.id === savedArchievement.id);
            if (achievement) {
                achievement.unlocked = savedArchievement.unlocked;
            }
        });
    }

    if (saveData.inventory) {
        inventory.length = 0;
        inventory.push(...saveData.inventory);
    }

    if (saveData.plants) {
        plants.length = 0;
        plants.push(...saveData.plants);
    }

    if (saveData.worldObjekte) {
        worldObjekte.length = 0;
        worldObjekte.push(...saveData.worldObjekte);
    }

    if (saveData.pets) {
        Object.assign(pets, saveData.pets);
        console.log("pets AFTER:", pets);
    }

    if (saveData.decorations) {
        Object.assign(decorations, saveData.decorations);
        console.log("decorations AFTER:", decorations);
    }


    console.log("Spielstand geladen");
    updateUI();
    if (typeof renderRoom == "function") {
        renderRoom();
    }
    console.log("LOADED:", saveData);
    
}


