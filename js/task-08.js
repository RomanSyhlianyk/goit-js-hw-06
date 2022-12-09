const loginFormEl = document.querySelector(".login-form");
console.log(loginFormEl);

loginFormEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const formElements = e.currentTarget.elements;
  const valueEmail = formElements.email.value;
  const valuePassword = formElements.password.value;
  const formData = {};
  if (valueEmail === "" || valuePassword === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    (formData.email = valueEmail), (formData.password = valuePassword);
    console.log(formData);
  }

  e.target.reset();
}
