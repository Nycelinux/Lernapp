/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * journal.js
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let currentJournalPage = 0;
let overlay;
let book;
let close;
let next;
let prev;

const journalPages = [
    {
        title: "Character",
        render: renderCharacter
    },
    {
        title: "Lernstatistiken",
        render: renderStatistics
    },
    {
        title: "Achievements",
        render: renderAchievements
    },
    {
        title: "Quests",
        render: renderQuests
    },
    {
        title: "Inventar",
        render: renderInventar
    },
];


function registerJournalEvents() {
    const sign = document.getElementById("player-sign");
    overlay = document.getElementById("journal-overlay");
    book = document.getElementById("journal-book");
    close = document.getElementById("journal-close");
    next = document.getElementById("journal-next");
    prev = document.getElementById("journal-prev");

    sign.addEventListener("click", openJournal);
    close.addEventListener("click", closeJournal);
    next.addEventListener("click", nextPage);
    prev.addEventListener("click", previousPage);
}

function openJournal() {
    updateJournal();
    updateJournalPages();
    overlay.classList.remove("hidden");
    requestAnimationFrame(() => {
        overlay.classList.add("show");
        book.classList.remove("close");
        book.classList.add("open");
    });
}

function closeJournal() {
    book.classList.remove("open");
    book.classList.add("close");
    overlay.classList.remove("show");
    setTimeout(() => {
        overlay.classList.add("hidden");
    }, 300);
}
function nextPage() {
    if (currentJournalPage <journalPages.length-1) {
        currentJournalPage++;
        updateJournalPages();
    }
}

function previousPage() {
    if (currentJournalPage > 0) {
        currentJournalPage--;
        updateJournalPages();
    }
}

function updateJournalPages() {
    document.getElementById("journal-page-number").innerText = "Seite " + (currentJournalPage + 1);
    journalPages[currentJournalPage].render();
}

function updateJournal() {
    const levelEl = document.getElementById("profile-level");
    const currentXPEl =document.getElementById("profile-current-xp");
    const totalXPEl =document.getElementById("profile-total-xp");
    const studyTimeEl =document.getElementById("profile-study-time");
    const neededXPEl = document.getElementById("profile-needed-xp");
    if (!levelEl || !currentXPEl || !totalXPEl || !studyTimeEl || !neededXPEl) return;

    levelEl.innerText = player.level;
    currentXPEl.innerText = player.xp
    totalXPEl.innerText = player.totalXP
    studyTimeEl.innerText = player.studyMinutes + " Minuten"
    neededXPEl.innerText = xpForNextLevel();
}

function renderCharacter() {
    document.getElementById("journal-left").innerHTML = `
            <h2>Charater</h2>
            <hr>
            <p>
                <strong>\uD83C\uDFC6 Level</strong><br>
                ${player.level}
            </p>
            <p>
                <strong>\uD83C\uDFC5 Aktuelle XP</strong><br>
               ${player.xp}/ ${xpForNextLevel()}
            </p>
            <p>
                <strong>\u2B50 Gesamt XP</strong><br>
                ${player.totalXP}
            </p>
    `;
    document.getElementById("journal-right").innerHTML = `
            <h2>\uD83C\uDF3F Status</h2>
            <hr>
            <p>
                <strong>\uD83D\uDCDD Gesamtlernzeit</strong><br>
                ${player.studyMinutes} Minuten
            </p>
            <p>
                <strong>\uD83D\uDCAF Motivation</strong><br>
                Jeder kleine Schritt zählt
            </p>
    `;
}

function renderStatistics() {
    document.getElementById("journal-left").innerHTML = `
            <h2>Statistik</h2>
            <hr>
            <p>Sessions: ${statistics.sessions}</p>
            <p>Gesamtzeit: ${statistics.totalMinutes} Minuten</p>
            <p>Längste Session: ${statistics.longestSession} Minuten</p>
     `;
    document.getElementById("journal-right").innerHTML = `
            <h2>Fortschritt</h2>
            <hr>
            <p>Heute: ${statistics.todayMinutes} Minuten</p>
            <p>Diese Woche: ${statistics.weekMinutes} Minuten</p>
            <p>Diesen Monat: ${statistics.monthMinutes} Minuten</p>
     `;
}

function renderAchievements() {
    let html = "<h2>Achievements </h2><hr>";
    achievements.forEach(a => {
        html += `
        <p>${a.unlocked ? "\u2705" :"\uD83D\uDD12"} <strong>${a.title}</strong><br> ${a.description}</p>
    `;
    });
        document.getElementById("journal-left").innerHTML = html;
        document.getElementById("journal-right").innerHTML = "";
}

function renderQuests() {
    let html = "<h2>Quests </h2><hr>";
    quests.forEach(q => {
        html += `
        <div class="pixel-card">
            <h3>${q.title}</h3>
            <p>${q.description}</p>
            <p>Belohnung: ${q.rewardXP}</p>

    `;
        if (q.rewardClaimed) {
            html += "<span class='pixel-tag green'>Erledigt</span>";
        }
        else if (q.completed) {
             html += `
                <button onClick="claimQuest('${q.id}')"> Belohnung</button>
        `;
        }
        else {
            html += "<span class='pixel-tag'>Offen</span>";
        }
        html += "</div>";

    });
    document.getElementById("journal-left").innerHTML = html;
    document.getElementById("journal-right").innerHTML = "";

}


function renderInventar() {
    let html = "<h2>Inventar </h2><hr>";
    inventory.forEach(item => {
        const data = itemDatabase[item.id];
        if (!data) {
            html += `
        <div class="pixel-card">
            <strong>\u2753 Unbekanntes Item: ${item.id}</strong>
            <br>
            x${item.amount}
        </div>
    `;
        }

        html += `
        <div class="pixel-card">
            <strong>${data.icon} ${data.name}</strong>
            <br>
            x${item.amount}
        </div>
    `;

    });
    document.getElementById("journal-left").innerHTML = html;
    document.getElementById("journal-right").innerHTML = "";

}