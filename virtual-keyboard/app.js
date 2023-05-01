import Keyboard from './components/keyboard.js';
import { storageGet } from './components/utils/storage.js';

const lang = storageGet('lang', 'ru');
new Keyboard().init(lang).generateLayout();

const infoButton = document.querySelector('.info');

infoButton.addEventListener('click', () => {
    alert('Shift+Alt для переключения языков\nЗадача реализована для Windows 10');
});

const oneButton = document.querySelectorAll('.key');
const createAudio = () => {
    const element = document.createElement("audio");
    element.src = "./assets/sound.mp3";
    element.classList.add("audio");
    document.body.append(element);
};
createAudio();

oneButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        playSoundPress();
    });
});

const playSoundPress = () => {
    const audio = document.querySelector('.audio');
    audio.play();
};