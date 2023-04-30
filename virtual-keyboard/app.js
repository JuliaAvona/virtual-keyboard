import Keyboard from './components/keyboard.js';
import { storageGet } from './components/utils/storage.js';

const lang = storageGet('lang', 'en');
new Keyboard().init(lang).generateLayout();
const infoButton = document.querySelector('.info');
infoButton.addEventListener('click', () => {
  alert('Shift+Alt для переключения языков\nЗадача реализована для Windows 10');
});