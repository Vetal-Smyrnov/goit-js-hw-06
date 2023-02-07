const inputEl = document.querySelector('input#font-size-control');
const textSpanEl = document.querySelector('#text');

const inputHandler = () => textSpanEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', inputHandler);