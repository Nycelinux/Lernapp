/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * placement
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let selectedObject = null;
let dragOffsetX = 0;
let dragOffsetY = 0;

function placeObject(type, x = 500, y = 400) {
  const furniture = furnitureDatabase[type];
  if (!furniture) {
    console.warn("Unbekanntes Möbelstück: ", type);
    return;
  }

  const object = {
    id: crypto.randomUUID(),
    type: type,
    x: x,
    y: y,
    rotation: 0,
  };

  worldObjekte.push(object);
  saveGame();
  renderWorld();
}

function moveObject(id, x, y) {
  const object = worldObjekte.find(object => object.id == id);
  if (!object) return;
  object.x = x;
  object.y = y;
  saveGame();
}

document.addEventListener("mousedown", (event) => {
  const objectElement = event.target.closest(".world-object");
  if (!objectElement) return;
  selectedObject = objectElement;
  const rect = selectedObject.getBoundingClientRect();
  dragOffsetX = event.clientX - rect.left;
  dragOffsetY = event.clientY - rect.top;
});

document.addEventListener("mousemove", (event) => {
  if (!selectedObject) return;

  const room = document.getElementById("room");
  if (!room) return;

  const roomRect = room.getBoundingClientRect();
  const x = event.clientX - roomRect.left - dragOffsetX;
  const y = event.clientY - roomRect.top - dragOffsetY;

  selectedObject.style.left = x + "px";
  selectedObject.style.top = y + "px";
});

document.addEventListener("mouseup", () => {
  if (!selectedObject) return;

  const id = selectedObject.dataset.id;
  const x = parseInt(selectedObject.style.left) || 0;
  const y = parseInt(selectedObject.style.top) || 0;

  moveObject(id, x, y);

  selectedObject = null;
});
