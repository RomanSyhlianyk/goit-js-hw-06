const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output")
console.log(nameOutputEl)
nameInputEl.addEventListener('input', changeName)

function changeName(e) {
    nameOutputEl.textContent = e.currentTarget.value || 'Anonymous'
}