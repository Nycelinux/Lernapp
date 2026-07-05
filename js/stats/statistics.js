/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * statistics
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const statistics = {
    sessions: 0,
    longestSessions: 0,
    totalMinutes: 0,
    todayMinutes: 0,
    weekMinutes: 0,
    monthMinutes: 0,
    currentStreak: 0,
    bestStreak: 0
    
};

function registerStudySession(minutes) {
    statistics.sessions++;
    statistics.totalMinutes += minutes;
    statistics.todayMinutes += minutes;
    statistics.weekMinutes += minutes;
    statistics.monthMinutes += minutes;
    if (minutes > statistics.longestSessions) {
        statistics.longestSessions = minutes;
    }
    checkAchievement();
    checkQuest();
    checkPets();
    saveGame();
}