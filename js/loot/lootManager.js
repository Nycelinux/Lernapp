/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * lootManager
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateLoot(minutes) {
    const rewards = [];
    lootTable.forEach(item => {
        if (Math.random() * 100 <= item.chance) {
            const amount = randomInt(item.min, item.max);
            addItems(item.id, amount);
            rewards.push({
                id: item.id,
                amount
            });
        }
    });
    return rewards;
}

EventBus.on("studyFinished", data => {
    const loot = generateLoot(data.minutes);
    if (loot.length === 0) return;
    let lootText = "";
    loot.forEach(item => {
        const info = itemDatabase[item.id];
        lootText += `\n${info.icon} ${info.name} x${item.amount}`;

    });
    showPopup("loot gefunden!", lootText);
});