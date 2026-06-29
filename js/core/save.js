
function saveGame() {
    localStorage.setItem("level", level);
    localStorage.setItem("xp", xp);
}

function loadGame() {
    const savedLevel = localStorage.getItem("level");
    const savedXP = localStorage.getItem("xp");
    if (savedXP) {
        xp = Number(savedXP);
        document.getElementById("xp").innerText = xp;
    }
    if (savedLevel) {
        level = Number(savedLevel);
        document.getElementById("level").innerText = level;
    }
}

loadGame();

