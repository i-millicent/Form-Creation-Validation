const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");
const userEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");

document.addEventListener(`DOMContentLoaded`, function () {
  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
     let username = userEl.value.trim();
     let email = emailEl.value.trim();
     let password = passwordEl.value.trim();

    let isValid = true;
    let messages = [];
    username.length <= 3
      ? ((isValid = false),
        messages.push(`userName should be more than 3 characters`))
      : null;
    email.includes(`@`) && email.includes(`.`)
      ? null
      : ((isValid = false), messages.push(`Email not valid`));
    password.length < 8
      ? ((isValid = false),
        messages.push(`Password should not be less than 8 characters`))
      : null;
    feedbackDiv.style.display = `block`;
    isValid === true
      ? ((feedbackDiv.textContent = `Registration successful`),
        (feedbackDiv.style.color = "#28a745"))
      : ((feedbackDiv.innerHTML = messages.join(`<br>`)),
        (feedbackDiv.style.color = "#dc3545"));
   });
});