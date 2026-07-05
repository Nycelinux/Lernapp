/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * quest
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const quests = [
    {
        id: "leran10",
        title: "Lern 10 Minuten",
        description:"Lerne insgesamt 10 Minuten",
        rewardXP: 20,
        completed:false,
        rewardClaimed: false,
        condition() { return statistics.totalMinutes >= 10;}
    },
    {
        id: "leran30",
        title: "Lern 30 Minuten",
        description: "Lerne insgesamt 10 Minuten",
        rewardXP: 60,
        completed: false,
        rewardClaimed: false,
        condition() { return statistics.totalMinutes >= 30; }
    },
    {
        id: "leran60",
        title: "Lern 60 Minuten",
        description: "Lerne insgesamt 10 Minuten",
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
    quests.forEach(q => {
        if (!q.completed && q.condition()) {
            q.completed = true;
            showPopup("	\uD83D\uDCDC Quest abgeschlossen", q.title);
        }
    });
}

function claimQuest(id) {
    const quest = quests.find(q => q.id === id);
    if (!quest) return;
    if (!quest.completed) return;
    if (quest.rewardClaimed) return;
    quest.rewardClaimed = true;
    addXP(quest.rewardXP);
    saveGame();
    updateJournal();
}