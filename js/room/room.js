/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * room
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

//TODO: anklickbare Möbel hinzufügen

function registerRoomEvents() {
    registerDesk();
}

//Schreibtisch
function registerDesk() {
    const desk = document.getElementById("desk-hitbox");
    desk.addEventListener("click", openTimerMenu);
}

//timerMenu öffnen
function openTimerMenu() {
    document.getElementById("timer-menu").classList.remove("hidden");
}

//timerMenu schließen
function closeTimerMenu() {
    document.getElementById("timer-menu").classList.add("hidden");
}

