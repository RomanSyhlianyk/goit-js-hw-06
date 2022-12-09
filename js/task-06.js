const validationInputEl = document.querySelector("#validation-input");
// console.log(validationInputEl.dataset.length)
validationInputEl.addEventListener('blur', validValue)

function validValue(e) {
    // console.log(e.currentTarget.value.length)
    // console.log(+e.target.dataset.length)
    if (+e.target.dataset.length === e.currentTarget.value.length) { e.currentTarget.classList.add("valid") }
    else if (e.currentTarget.value.length === 0) { e.currentTarget.classList.remove("valid"), e.currentTarget.classList.remove("invalid") } else { e.currentTarget.classList.add("invalid")}
   
}