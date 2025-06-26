document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("loginError");

  if (username === "admin" && password === "admin123") {
    localStorage.setItem("loggedIn", true);
    window.location.href = "admin-dashboard.html";
  } else {
    error.textContent = "Username atau password salah.";
  }
});
