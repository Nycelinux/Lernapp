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
    }
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
            <p>
                Heute gelernt
            </p>
     `;
    document.getElementById("journal-right").innerHTML = `
            <h2>Coming Soon</h2>
            <hr>
            <p>
                Hier könnte ein Diagramm stehen.
            </p>
     `;
}