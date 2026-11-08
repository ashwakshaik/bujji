const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match. Please try again.";
    message.style.color = "#c62828";
    return;
  }

  message.textContent = "Registration form submitted successfully!";
  message.style.color = "#218838";
  form.reset();
});
