function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const widgetEl = document.querySelector('.widget')
console.log(widgetEl)
const colorEl = document.querySelector('.color')
console.log(colorEl)
const changeColorEl = document.querySelector('.change-color')
console.log(changeColorEl)

changeColorEl.addEventListener('click', onchangeColor)

function onchangeColor() {
  widgetEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent=getRandomHexColor()
}