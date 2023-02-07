const inputTextEl = document.querySelector('input#name-input');
const outputTextEl = document.querySelector('span#name-output');

const getEnteredName = (event) => {
    if(!event.currentTarget.value.trim()) outputTextEl.textContent = 'Anonymous';

    outputTextEl.textContent = event.currentTarget.value;
}

inputTextEl.addEventListener('input', getEnteredName); 