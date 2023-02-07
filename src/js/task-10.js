function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlPanel = document.querySelector("#controls input");
const buttonForCreatingBox = document.querySelector("button[data-create]");
const buttonForDestroyingBox = document.querySelector("button[data-destroy]");
const containerEl = document.querySelector("#boxes");

controlPanel.addEventListener("input", enteredNumber);
buttonForCreatingBox.addEventListener("click", createBoxes);
buttonForDestroyingBox.addEventListener("click", destroyBoxes);

function enteredNumber(number) {
  controlPanel.setAttribute("count", Number(number.currentTarget.value));
};

let originalBoxSize = 30;

function createBoxes() {
  let countBox = Number(controlPanel.getAttribute("count"));

  for (let index = 0; index < countBox; index += 1) {
    originalBoxSize += 10;

    const createdBox = document.createElement("div");

    createdBox.style.backgroundColor = getRandomHexColor();
    createdBox.style.width = `${originalBoxSize}px`;
    createdBox.style.height = `${originalBoxSize}px`;
    createdBox.classList.add('.created-box');
    containerEl.append(createdBox);
  }
};

function destroyBoxes() {
  const newBoxes = document.querySelectorAll('.created-box');

  for (const box of newBoxes) {
    containerEl.innerHTML = '';
    controlPanel.value = 0;
  }

  originalBoxSize = 30;  
};
