/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * timer
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 

let rewardXP = 0;
let timerInterval = 0;
let remainingSeconds = 0;
let studyMinutes = 0;
let currentStudyMinutes = 0;


//Timer starten
function startTimer(seconds, reward, minutes) {
    currentStudyMinutes = minutes;
    closeTimerMenu();
    rewardXP = reward;
    remainingSeconds = seconds;
    
    document.getElementById("timer-window").classList.remove("hidden");
    updateTimerDisplay();
    clearInterval(timerInterval);
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
    addStudyMinutes(currentStudyMinutes);
    registerStudySession(minutes);
    updateUI();
    showPopup("Gut gemacht, Lernsession beendet!", `+${rewardXP} XP`);
}



