/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * core.js alle Einstellungen des Spiels
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const CONFIG = {
    //Level
    LEVEL_BASE_XP: 100,
    XP_PER_LEVEL: 100,
    MAX_LEVEL: 999,

    //Timer
    TIMER_REWARDS: {
        2:5,
        5:25,
        10:60,
        15:90,
        30:200,
        45:350,
        60:500,
    },

    //Farben
    COLORS: {
        XP: "#72c35d",
        LEVEL: "#d9c47f"
    },

    //Animationen
    ANIMATION: {
        POPUP_TIME: 250,
        SIGN_FLOAT_SPEED:5
    },

    //Speicher
    SAVE_KEY: "pixel-study-save"
};