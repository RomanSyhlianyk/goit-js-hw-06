const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl =document.querySelector('#text')
console.log(fontSizeControlEl.value)
fontSizeControlEl.addEventListener('input', () => {
    console.log(fontSizeControlEl.value)
  textEl.style.fontSize = fontSizeControlEl.value + 'px'
})