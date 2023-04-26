//Create DOM
const createHeader = () => {
    const element = document.createElement("header");
    element.innerHTML = `
    <h1 class="header__text">Virtual keyboard</h1>
    <h4 class="header__info">The keyboard was created in the operating system Mac OS<br>
    To switch the language combination: left ctrl + alt</h4>
    `;
    document.body.append(element);
};

const createTextarea = () => {
    const element = document.createElement("section");
    element.innerHTML = `
    <textarea class="textarea__text" placeholder="Type here..."></textarea>
    `;
    element.classList.add("textarea");
    document.body.append(element);
};

const createKeyboard = () => {
    const element = document.createElement("section");
    element.innerHTML = `
    <div class="one-row">
    <button class="one-button">§</button>
    <button class="one-button">1</button>
    <button class="one-button">2</button>
    <button class="one-button">3</button>
    <button class="one-button">4</button>
    <button class="one-button">5</button>
    <button class="one-button">6</button>
    <button class="one-button">7</button>
    <button class="one-button">8</button>
    <button class="one-button">9</button>
    <button class="one-button">0</button>
    <button class="one-button">-</button>
    <button class="one-button">=</button>
    <button class="one-button style-one">Backspace</button>
</div>
<div class="one-row">
    <button class="one-button style-three">Tab</button>
    <button class="one-button">Q</button>
    <button class="one-button style-three">W</button>
    <button class="one-button">E</button>
    <button class="one-button">R</button>
    <button class="one-button">T</button>
    <button class="one-button">Y</button>
    <button class="one-button">U</button>
    <button class="one-button">I</button>
    <button class="one-button">O</button>
    <button class="one-button">P</button>
    <button class="one-button">[</button>
    <button class="one-button">]</button>
    <button class="one-button style-two">Del</button>
</div>
<div class="one-row">
    <button class="one-button style-one">Caps Lock</button>
    <button class="one-button style-three">A</button>
    <button class="one-button style-three">S</button>
    <button class="one-button style-three">D</button>
    <button class="one-button">F</button>
    <button class="one-button">G</button>
    <button class="one-button">H</button>
    <button class="one-button">J</button>
    <button class="one-button">K</button>
    <button class="one-button">L</button>
    <button class="one-button">;</button>
    <button class="one-button">'</button>
    <button class="one-button">|</button>
    <button class="one-button style-three">Enter</button>
</div>
<div class="one-row">
    <button class="one-button style-two">Shift</button>
    <button class="one-button">~</button>
    <button class="one-button">Z</button>
    <button class="one-button">X</button>
    <button class="one-button">C</button>
    <button class="one-button">V</button>
    <button class="one-button">B</button>
    <button class="one-button">N</button>
    <button class="one-button">M</button>
    <button class="one-button">.</button>
    <button class="one-button">,</button>
    <button class="one-button">/</button>
    <button class="one-button">▲</button>
    <button class="one-button style-two">Shift</button>
</div>
<div class="one-row">
    <button class="one-button style-one">Ctrl</button>
    <button class="one-button style-three">Opt</button>
    <button class="one-button style-one">Com</button>
    <button class="one-button button-space style-two"> </button>
    <button class="one-button style-three">Com</button>
    <button class="one-button style-one">Opt</button>
    <button class="one-button">◄</button>
    <button class="one-button">▼</button>
    <button class="one-button">►</button>
</div>
<audio class="audio" src="assets/sound.mp3"></audio>
<audio class="audio-start" src="assets/turn_on.mp3"></audio>`;
    element.classList.add("keybord");
    document.body.append(element);
};

createHeader();
createTextarea();
createKeyboard();

export { createHeader, createTextarea, createKeyboard };