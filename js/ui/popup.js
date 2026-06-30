/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * popup
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupMessage = document.getElementById("popup-message");
const popupButton = document.getElementById("popup-button");

function showPopup(title, message) {
    popup.classList.remove("hidden");
    console.log("popup wird geöffnet");
    popupTitle.innerText = title;
    popupMessage.innerText = message;
}

function closePopup() {
    popup.classList.add("hidden");
}

popupButton.addEventListener("click", closePopup);