/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * pets.js
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const pets = {
    current: "",
    owned:[]
};

const petState = {
    state: "idle",
    targetX: 0,
    targetY: 0
};

const petsDatabase = [
    {
        id: "cat",
        name: "mochi",
        description: "Sehr zutraulich und anhänglich",
        unlock() {
            return statistics.totalMinutes >= 60;
        }

    },
    {
        id: "fox",
        name: "kitsune",
        description: "Liebt lange Lernsession",
        unlock() {
            return player.level >= 7;
        }

    },
    {
        id: "owl",
        name: "nox",
        description: "SSo nachtaktiv wie Nachteulen",
        unlock() {
            return statistics.sessions >= 20;
        }

    },
];

function checkPets() {
    petsDatabase.forEach(p => {
        if (p.unlock() && !pets.owned.includes(p.id)) {
            pets.owned.push(p.id);
            showPopup("\uD83D\uDC3E Neues Haustier", p.name);
        }
    });
}

function equipPets(id) {
    if (!pets.owned.includes(id)) return;
    pets.current = id;
    renderRoom();
}