const valueEl = document.querySelector('#value');
console.log(valueEl.nextElementSibling)
let counterValue = 0;
valueEl.previousElementSibling.addEventListener('click', () => {
   counterValue -= 1
    valueEl.textContent = counterValue
    
});
valueEl.nextElementSibling.addEventListener('click', () => {
    counterValue +=1
    valueEl.textContent = counterValue
} )