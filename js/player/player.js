/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Player
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const player = {
    level: 0,
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
    saveGame();
}


//Holzschild
function updateLevelSign() {
    document.getElementById("level").innerText = player.level;
    document.getElementById("xp-text").innerText = `${player.xp}/${xpForNextLevel()} XP`;
    const percent = player.xp / xpForNextLevel() * 100;
    document.getElementById("xp-fill").style.width = percent + "%";
}


//Profile
function updateProfile() {
    document.getElementById("profile-level").innerText = player.level;
    document.getElementById("profile-current-xp").innerText = player.xp;
    document.getElementById("profile-needed-xp").innerText = xpForNextLevel();
    document.getElementById("profile-total-xp").innerText = player.total-xp;
    document.getElementById("profile-study-time").innerText = player.studyMinutes+" Minuten";

}