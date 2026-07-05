/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * quest
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const quests = [
    {
        id: "lern10",
        title: "Lern 10 Minuten",
        description:"Lerne insgesamt 10 Minuten",
        rewardXP: 20,
        completed:false,
        rewardClaimed: false,
        condition() { return statistics.totalMinutes >= 10;}
    },
    {
        id: "lern30",
        title: "Lern 30 Minuten",
        description: "Lerne insgesamt 30 Minuten",
        rewardXP: 60,
        completed: false,
        rewardClaimed: false,
        condition() { return statistics.totalMinutes >= 30; }
    },
    {
        id: "lern60",
        title: "Lern 60 Minuten",
        description: "Lerne insgesamt 60 Minuten",
        rewardXP: 100,
        completed: false,
        rewardClaimed: false,
        condition() { return statistics.totalMinutes >= 60; }
    },
    {
        id: "first_session",
        title: "Erste Schritte",
        description: "Schließe deine erste Lernsession ab",
        rewardXP: 20,
        completed: false,
        rewardClaimed: false,
        condition() { return statistics.sessions >= 1; }
    },
    {
        id: "level_3",
        title: "Aufstieg Level3",
        description: "Erreiche Level 3",
        rewardXP: 100,
        completed: false,
        rewardClaimed: false,
        condition() { return player.level >= 3; }
    },

];

function checkQuest() {
    let changed = false;
    quests.forEach(q => {
        if (!q.completed && q.condition()) {
            q.completed = true;
            changed = true;
            showPopup("	\uD83D\uDCDC Quest abgeschlossen", q.title);
        }
    });
    if (changed) {
        saveGame();
    }
}

function claimQuest(id) {
    const quest = quests.find(q => q.id === id);

    if (!quest) return;
    if (!quest.completed) return;
    if (quest.rewardClaimed) return;

    quest.rewardClaimed = true;
    addXP(quest.rewardXP);
    updateJournal();
    updateJournalPages();
    saveGame();
}