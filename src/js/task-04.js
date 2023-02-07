const counter = {
    counterValue: 0,
    increment() {
        this.counterValue +=1;
    },

    decrement() {
        this.counterValue -=1;
    },
};

const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

btnDecrementEl.addEventListener('click', () => {
    counter.decrement();
    valueEl.textContent = counter.counterValue;
});
btnIncrementEl.addEventListener('click', () => {
    counter.increment();
    valueEl.textContent = counter.counterValue;
});