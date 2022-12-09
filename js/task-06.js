const validationInputEl = document.querySelector("#validation-input");
// console.log(validationInputEl.dataset.length)
validationInputEl.addEventListener("blur", validValue);
const maxCount = validationInputEl.getAttribute('data-length')
function validValue(e) {
  // console.log(e.currentTarget.value.length)
  // console.log(+e.target.dataset.length)
  // if (+e.target.dataset.length !== e.currentTarget.value.length) {
  //   e.currentTarget.classList.add("invalid");
  // } else if (+e.target.dataset.length === 0) {
  //   e.currentTarget.classList.remove("invalid");
  // } else {
  //   e.currentTarget.classList.remove("invalid");
  //   e.currentTarget.classList.add("valid");
  // }
  console.log(e.target.value.length);
  if (e.target.value.length === Number(maxCount)) {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add('valid');
  } else {
    validationInputEl.classList.remove("valid");
    validationInputEl.classList.add("invalid");
  }
}
