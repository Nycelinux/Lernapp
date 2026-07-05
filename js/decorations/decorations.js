/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * decorations
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const decorations = {
    plant: false,
    windowPlant: false,
    cat: false,
    books: false,
    lamp: false,
};

function unlockDecoration(name) {
    if (decorations[name]) return;
    decorations[name] = true;
    renderRoom();
    saveGame();
}