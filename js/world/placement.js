/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * placement
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let selectedObject = null;
function placeObject(type, x, y) {
    worldObjekte.push({ id: crypto.randomUUID(), type, x, y });
    saveGame();
    renderWorld();
}

function moveObject(id, x, y) {
    const object = worldObjekte.find(o => o.id == id);
    if (!object) return;
    object.x = x;
    object.y = y;
    saveGame();
}

document.addEventListener("mousedown", e => {
    if (!e.target.classList.contains("world-object"))
        return;
    selectedObject = e.target;
});

document.addEventListener("mousemove", e => {
    if (!selectedObject) return;
    selectedObject.style.left = e.pageX - 24 + "px";
    selectedObject.style.top = e.pageY - 24 + "px";
});

document.addEventListener("mouseup", () => {
    if (!selectedObject) return;
    moveObject(
        selectedObject.dataset.id,
        parseInt(selectedObject.style.left),
        parseInt(selectedObject.style.top),
    );
    selectedObject = null;
});