/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * achievement
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const achievements = [
    {
        id: "first_session",
        title: "Erster Schritt",
        description: "Schließe die erste Lernsession ab",
        unlocked:false,
        condition: () => statistics.sessions >= 1

    },
    {
        id: "100_minutes",
        title: "100 Minuten gelernt",
        description: "Lerne insgesamt 100 Minuten",
        unlocked: false,
        condition: ()=>statistics.totalMinutes>=100
    },
    {
        id: "one_hour",
        title: "60 Minuten gelernt",
        description: "Lerne insgesamt 60 Minuten",
        unlocked: false,
        condition: () => statistics.totalMinutes >= 60
    },
    {
        id: "level5",
        title: "Level 5",
        description: "Schließe die erste Lernsession ab",
        unlocked: false,
        condition: ()=>player.level>=5
    },
    {
        id: "100xp",
        title: "100 XP",
        description: "Sammle 100 Xp",
        unlocked: false,
        condition: () => player.totalXP >= 100
    },
    {
        id: "500xp",
        title: "500 XP",
        description: "Sammle 500 Xp",
        unlocked: false,
        condition: () => player.totalXP >= 500
    },
    {
        id: "1000xp",
        title: "1000 XP",
        description: "Sammle 1000 Xp",
        unlocked: false,
        condition: () => player.totalXP >= 1000
    },
];

function checkAchievements() {
    achievements.forEach(a => {
        if (!a.unlocked && a.condition()) {
            a.unlocked = true;
            showPopup("\uD83D\uDCDD Achievement, a.title");
        }

    });
}