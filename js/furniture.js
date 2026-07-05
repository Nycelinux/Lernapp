/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * furniture
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const furniture = [
    {
        id: "desk",
        name: "Schreibtisch",
        description: "ort zum lernen",
        interact() {
            openTimerMenu();
        }

    },
    {
        id: "plant",
        name: "Pflanze",
        description: "kleine Zimmerpflanzen",
        interact() {
            openDecorationInfo("plant");
        }

    },
    {
        id: "bed",
        name: "Bett",
        description: "schlafen",
    },
    {
        id: "bookshelf",
        name: "Regal",
        description: "Fantasy und Lernressourcen",
    },
    {
        id: "window",
        name: "Fenster",
        description: "schöne Aussicht",
    },

];