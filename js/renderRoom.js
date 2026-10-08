/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * renderer
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function renderRoom() {
  renderDecoration("plant", "room-plant");
  renderDecoration("books", "room-books");
  renderDecoration("cat", "room-cat");
  renderDecoration("lamp", "room-lamp");
  //renderLighting()
  renderPet();
  renderPlants();
  renderWorld();
  ///renderParticles()
  //rendeQuestObjects()
}

function renderDecoration(saveName, id) {
  const object = document.getElementById(id);
  if (!object) return;
  object.classList.toggle("hidden", !decorations[saveName]);
}

function renderPet() {
  const pet = document.getElementById("room-pet");
  if (!pet) return;
  if (!pets.current) {
    pet.classList.add("hidden");
    return;
  }
  pet.src = "assets/pets/" + pets.current + ".png";
  pet.classList.remove("hidden");
}

function renderPlants() {
  const room = document.getElementById("room");
  if (!room) return;
  document.querySelectorAll(".room-plant-object").forEach((e) => e.remove());
  plants.forEach((plant) => {
    const data = plantDatabase[plant.type];
    if (!data) {
      console.warn("unbekannte Pflanze: ", plant.type);
      return;
    }
    const img = document.createElement("img");
    img.className = "room-plant-object";
    img.dataset.id = plant.id;
    img.src = "assets/plants/" + plant.type + "_stage" + plant.stage + ".png";
    img.style.left = plant.x + "px";
    img.style.top = plant.y + "px";
    room.appendChild(img);
  });
}

function renderWorld() {
  const room = document.getElementById("room");
  if (!room) return;

  document.querySelectorAll(".world-object").forEach((object) => {
    object.remove();
  });

  worldObjekte.forEach((object) => {
    const data = furnitureDatabase[object.type];

    if (!data) {
      console.warn("Unbekanntes Möbelstück: ", object.type);
      return;
    }

    const img = document.createElement("img");

    img.className = "world-object";
    img.dataset.id = object.id;
    img.dataset.type = object.type;

    img.src = "assets/furniture/" + data.image;

    img.style.position = "absolute";
    img.style.left = object.x + "px";
    img.style.top = object.y + "px";

    if (data.width) {
      img.style.width = data.width + "px";
    }

    if (data.height) {
      img.style.height = data.height + "px";
    }

    room.appendChild(img);
  });
}
