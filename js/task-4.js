const formElem = document.querySelector(".login-form");
formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = formElem.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  const formInform = {
    email: emailValue,
    password: passwordValue,
  };

  console.log("Information:", formInform);

  formElem.reset();
});
