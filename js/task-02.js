const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = document.querySelector('#ingredients');

console.log(ingredientsRef)
const elements = ingredients.map(ingredient => {
  const rowEl = document.createElement("li");
  rowEl.textContent = `${ingredient}`;
  rowEl.classList.add('item');
  console.log(rowEl);
  return rowEl;
})
ingredientsRef.append(...elements)