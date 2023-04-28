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
const textArea = document.querySelector('.textarea__text');

oneButton.forEach((btn) => {

    btn.addEventListener('click', (event) => {
        playSoundPress();
        textArea.focus();
        textArea.textContent = event.code;
    });

    btn.addEventListener('keydown', (event) => {
        playSoundPress();
        textArea.focus();
        textArea.textContent = event.code;
    });

});

function playSoundPress() {
    const audio = document.querySelector('.audio');
    audio.play();
}