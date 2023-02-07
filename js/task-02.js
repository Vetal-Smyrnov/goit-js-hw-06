const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredientsEl = document.querySelector('ul#ingredients');

const namesOfIngredients = ingredients.map(option => {
  const itemOfIngredientsEl = document.createElement('li');
  itemOfIngredientsEl.classList.add('item');
  itemOfIngredientsEl.textContent = option;

  return itemOfIngredientsEl;
});

listOfIngredientsEl.append(...namesOfIngredients);
