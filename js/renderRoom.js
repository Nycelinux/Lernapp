/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * renderer
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function renderRoom(){
    renderDecoration("plant", "room-plant");
    renderDecoration("books", "room-books");
    renderDecoration("cat", "room-cat");
    renderDecoration("lamp", "room-lamp");
    //renderLighting()
    renderPet();
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
    pet.src = "assets/pets/" + pets.current + " .png";
    pet.classList.remove("hidden");
}

