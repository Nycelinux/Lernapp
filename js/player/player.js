/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Player
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const player = {
    level: 1,
    xp: 0,
    totalXP: 0,
    studyMinutes: 0
};

//XP hinzufügen
function addXP(amount) {
    player.xp += amount;
    player.totalXP += amount;
    while (player.xp >= xpForNextLevel()) {
        player.xp -= xpForNextLevel();
        player.level++;
        showPopup("LEVEL UP!", `Du bist jetzt Level ${player.level}!`);
    }
   
    checkPets();
    updateUI();
    saveGame();
}

// benötigte XP
function xpForNextLevel() {
    return CONFIG.LEVEL_BASE_XP + (player.level - 1) * CONFIG.XP_PER_LEVEL;
}

//Lernzeit
function addStudyMinutes(minutes) {
    player.studyMinutes += minutes;
    updateUI();
    saveGame();  
}


//Holzschild
function updateLevelSign() {
    document.getElementById("level").innerText = player.level;
    document.getElementById("xp-text").innerText = `${player.xp}/${xpForNextLevel()} XP`;
    const percent = player.xp / xpForNextLevel() * 100;
    document.getElementById("xp-fill").style.width = percent + "%";
}


//Entwickler reset
function resetGame() {
    player.level = 1;
    player.xp = 0;
    player.totalXP = 0;
    player.studyMinutes = 0;
    saveGame();
    updateUI();
    console.log("Spiel zurückgesetzt");
}