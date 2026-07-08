/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * plants.js
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const plants = [];

function plantSeed(type = "flower") {
    if (!removeItems("seed")) {
        showPopup("Keine Samen", "du besitzt keine Samen");
        return;
    }
    plants.push({ id:crypto.randomUUID(),type, stage:0, growth: 0, x: 650, y:460});
    saveGame();
    renderPlants();
}

function growPlants() {
    plants.forEach(p => {
        p.growth++;
        const data = plantDatabase[p.type];
        if (p.stage < data.stages.length - 1 && p.growth >= data.growthNeeded) {
            p.stage++;
            p.growth = 0;
        }
    });
    saveGame();
    renderPlants();
}

function harvestPlant(id) {
    const plant = plants.find(p => p.id === id);
    if (!plant) return;
    const data = plantDatabase[plant.type];
    if (plant.stage < data.stages.length-1) {
        showPopup("Noch nicht fertig", "Diese Pflanze wächst noch");
        return;
    }
    addItems("flower");
    plants.splice(plants.indexOf(plant), 1);
    saveGame();
    renderPlants();
}