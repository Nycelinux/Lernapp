/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * plantDatabase.js
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const plantDatabase = {
    flower: {
        name: "Blume",
        stages: [
            "\uD83C\uDF31", "\uD83E\uDEB4", "\uD83C\uDF38"
        ],
        growthNeeded: 3
    }
};

function plantSeed(type= "flower") {
    if (!hasItem("seed")) {
        showPopup("Error, keine Samen", "Aktuell besitzt du keine Samen");
        return;
    }
    removeItems("seed");
    plants.push({ type, growth: 0 });
    saveGame();
}

function growPlants() {
    plants.forEach(p => {
        p.growth++;
    });
}