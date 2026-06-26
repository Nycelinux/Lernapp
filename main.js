// JavaScript source code
let level = 0;
let xp = 0;
const desk = document.getElementById("desk-hitbox");
desk.addEventListener("click", () => {
    document.getElementById("timer-menu").classList.remove("hidden");
});

function closeMenu() {
    document.getElementById("timer-menu").classList.add("hidden");
}

function addXP(amount) {
    xp += amount;
    while (xp >= 100) {
        xp -= 100;
        level++;
        document.getElementById("level").innerText = level;
        alert("Level up");
    }
    const percent = xp / xpForNextLevel() * 100;
    document.getElementById("xp-fill").style.width = percent +"%";

    //document.getElementById("xp").innerText = xp;
    saveGame();
}

function startTimer(seconds, rewardXP) {
    closeMenu();
    const timerWindow = document.getElementById("timer-window");
    timerWindow.classList.remove("hidden");
    let time = seconds;
    const interval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const secs = time % 60;
        document.getElementById("timer-display").innerText = `${minutes}:${secs.toString().padStart(2, "0")}`;
        time--;

        if (time < 0) {
            clearInterval(interval);
            timerWindow.classList.add("hidden");
            addXP(rewardXP);
            alert(`Gut gemacht, Lernsession beendet! + ${rewardXP} XP`);
        }
    }, 1000);

    

}

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