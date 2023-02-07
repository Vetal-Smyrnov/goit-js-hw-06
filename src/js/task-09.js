function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const buttonChangeColorBodyEl = document.querySelector('button.change-color');
const colorValue = document.querySelector('span.color')

buttonChangeColorBodyEl.addEventListener('click', onClickChangeColor);

function onClickChangeColor(event) {
  event.preventDefault();

  const changedColor = getRandomHexColor();
  document.body.style.backgroundColor = changedColor;
  colorValue.textContent = changedColor;

  return changedColor;
};
