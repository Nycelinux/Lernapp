/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * statistics
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function getDateKey(date = new Date()) {
  return date.toISOString().split("T")[0];
}

function getStartOfWeek(date = new Date()) {
  const result = new Date(date);
  const day = result.getDay();
  const daysSinceMonday = day === 0 ? 6 : day - 1;
  result.setDate(result.getDate() - daysSinceMonday);
  result.setHours(0, 0, 0, 0);
  return result;
}

function getWeekKey(date = new Date()) {
  return getDateKey(getStartOfWeek(date));
}

function getMonthKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

const statistics = {
  sessions: 0,
  longestSession: 0,
  totalMinutes: 0,

  todayMinutes: 0,
  weekMinutes: 0,
  monthMinutes: 0,
  currentStreak: 0,
  bestStreak: 0,
  lastStudyDate: null,
  todayKey: getDateKey(),
  weekKey: getWeekKey(),
  monthKey: getMonthKey(),
};

function updateStatisticsPeriod() {
  const todayKey = getDateKey();
  const weekKey = getWeekKey();
  const monthKey = getMonthKey();

  if (statistics.todayKey !== todayKey) {
    statistics.todayMinutes = 0;
    statistics.todayKey = todayKey;
  }

  if (statistics.weekKey !== weekKey) {
    statistics.weekMinutes = 0;
    statistics.weekKey = weekKey;
  }

  if (statistics.monthKey !== monthKey) {
    statistics.monthMinutes = 0;
    statistics.monthKey = monthKey;
  }
}

function registerStudySession(minutes) {
  updateStatisticsPeriod();
  statistics.sessions++;
  statistics.totalMinutes += minutes;
  statistics.todayMinutes += minutes;
  statistics.weekMinutes += minutes;
  statistics.monthMinutes += minutes;
  if (minutes > statistics.longestSession) {
    statistics.longestSession = minutes;
  }
  statistics.lastStudyDate = getDateKey();
}
