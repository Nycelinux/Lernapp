/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * game Manager
 * zentrale Spiellogik
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const GameManager = {
    init() {
        loadGame();
        updateUI();
        if (typeof renderRoom === "function") {
            renderRoom();
        }
    },
    refresh() {
        updateUI();
        if (typeof renderRoom === "function") {
            renderRoom();
        }
        saveGame();
    },
    onStudySession(minutes, xp) {
        registerStudySession(minutes);
        addStudyMinutes(minutes);
        addXP(xp);
        growPlants();
        EventBus.emit("progressUpdated", {minutes,xp});
        this.refresh();
    },
    onQuestReward(xp) {
        addXP(xp);
        this.refresh();
    },
    addItem(id, amount = 1) {
        addItems(id, amount);
        this.refresh();
    },
    unlockDecoration(id) {
        decorations[id] = true;
        this.refresh();
    },
    unlockPet(id) {
        pets.current = id;
        if (!pets.owned.includes(id)) {
            pets.owned.push(id);
        }
        this.refresh();
    }
};

EventBus.on("studyFinished", data => {
    GameManager.onStudySession(data.minutes, data.xp);
});