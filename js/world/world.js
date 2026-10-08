/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * world
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const worldObjekte = [];
function removeWorldObject(id) {
  const index = worldObjekte.findIndex((object) => object.id === id);
  if (index === -1) return;
  worldObjekte.splice(index, 1);
  saveGame();
  renderWorld();
}
