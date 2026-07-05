/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * inventory
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const inventory = [];

function addItems(id, amount=1) {
    let item = inventory.find(i => i.id === id);
    if (item) {
        item.amount += amount;
    }
    else {
        inventory.push({ id, amount });
    }
    saveGame();
    renderInventar();
}

function removeItems(id, amount = 1) {
    let item = inventory.find(i => i.id === id);
    if (!item) return;
    item.amount -= amount;
    if (item.amount <= 0) {
        inventory.splice(inventory.indexOf(item), 1);
    }
}

function hasItem(id) {
    return inventory.some(i => i.id === id);
}

function itemAmount(id) {
    let item = inventory.find(i => i.id === id);
    return item ? item.amount : 0;
}

//Dev testing
function giveDebugItems() {
    addItems("coin", 10);
    addItems("seed", 3);
    addItems("flower", 1);
}
