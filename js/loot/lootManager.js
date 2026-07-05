/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * lootManager
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateLoot() {
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