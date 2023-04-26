import { createHeader, createTextarea, createKeyboard } from "./components/create-keyboard.js";

const buttonsInfo = [
    {
        name: "Jennifer",
        datakey: "1",
        row: "1",
        mainEng: "q",
        tabEng: "Q",
        mainRus: "й",
        tabRus: "Й",
    },
];

//Audio
const oneButton = document.querySelectorAll('.one-button');

oneButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        playSoundPress();
    });
});

function playSoundPress() {
    const audio = document.querySelector('.audio');
    audio.play();
}