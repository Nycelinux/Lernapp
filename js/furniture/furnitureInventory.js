/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * furnitureInventory
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const ownedFurniture = [];
function unlockFurniture(id) {
  if (ownedFurniture.includes(id)) return;

  if (!furnitureDatabase[id]) {
    console.warn("Unbekanntes Möbelstück:", id);
    return;
  }

  ownedFurniture.push(id);
  saveGame();
}

function hasFurniture(id) {
  return ownedFurniture.includes(id);
}

function getOwnedFurniture() {
  return ownedFurniture.map((id) => furnitureDatabase[id]).filter(Boolean);
}
