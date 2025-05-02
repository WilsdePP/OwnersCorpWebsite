const allowedOwners = [
  "owner1@example.com",
  "owner2@example.com",
  "owner3@example.com",
  "owner4@example.com",
  "owner5@example.com"
];

const redirectURL = "https://drive.google.com/drive/folders/1KqKUcfGwy6aErbpzzW_SO2ihzAA_p3yn?usp=drive_link";

function register() {
  const email = document.getElementById('email').value.trim().toLowerCase();
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  if (!allowedOwners.includes(email)) {
    message.style.color = "red";
    message.textContent = "This email is not registered with the Owners Corporation.";
    return;
  }

  if (localStorage.getItem(email)) {
    message.style.color = "orange";
    message.textContent = "This email is already registered. Please log in.";
    return;
  }

  localStorage.setItem(email, password);
  message.style.color = "green";
  message.textContent = "Registration successful! Redirecting...";
  setTimeout(() => {
    window.location.href = redirectURL;
  }, 1500);
}

function login() {
  const email = document.getElementById('email').value.trim().toLowerCase();
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  if (!allowedOwners.includes(email)) {
    message.style.color = "red";
    message.textContent = "Email not recognized.";
    return;
  }

  const storedPassword = localStorage.getItem(email);

  if (!storedPassword) {
    message.style.color = "orange";
    message.textContent = "Email not registered. Please register first.";
    return;
  }

  if (storedPassword === password) {
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = redirectURL;
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Incorrect password.";
  }
}
