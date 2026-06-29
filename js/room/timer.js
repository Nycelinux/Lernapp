/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * timer
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 

let rewardXP = 0;
let timerInterval = 0;
let remainingSeconds = 0;



function closeMenu() {
    document.getElementById("timer-menu").classList.add("hidden");
}

//Timer starten
function startTimer(seconds, rewardXP) {
    closeTimerMenu();
    rewardXP = reward;
    remainingSeconds = seconds;
    document.getElementById("timer-window").classList.remove("hidden");
    updateTimerDisplay();
    timerInterval = setInterval(updateTimer, 1000);
}

// jede Sekunde
function updateTimer() {
    remainingSeconds--;
    updateTimerDisplay();
    if (remainingSeconds <= 0) {
        finishTimer();
    }
}

//Anzeige
function updateTimerDisplay() {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    document.getElementById("timer-display").innerText = `${minutes}:${seconds.toString().padStart(2, "0")}`;

}

//Ende
function finishTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer-window").classList.add("hidden");
    addXP(rewardXP);
    addStudyMinutes(Math.round(rewardXP / 10));
    showPopup("Gut gemacht, Lernsession beendet!", `+${rewardXP} XP`);
}