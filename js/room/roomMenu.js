/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * room menu events
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function registerRoomMenuEvents() {
  const furnitureButton = document.getElementById("furniture-button");
  const plantButton = document.getElementById("plant-button");

  if (furnitureButton) {
    furnitureButton.addEventListener("click", openFurnitureMenu);
  }

  if (plantButton) {
    plantButton.addEventListener("click", openPlantMenu);
  }
}

function openFurnitureMenu() {
  placeObject("desk", 500, 400);
}

function openPlantMenu() {
  plantSeed("flower");
}
