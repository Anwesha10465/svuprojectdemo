// Demo users
const users = {
  admin: { password: "admin123", role: "Admin" },
  contributor: { password: "cont123", role: "Contributor" },
  reader: { password: "read123", role: "Reader" },
  viewer: { password: "view123", role: "Viewer" }
};

const loginPage = document.getElementById("loginPage");
const dashboardPage = document.getElementById("dashboardPage");
const loginForm = document.getElementById("loginForm");
const welcomeMsg = document.getElementById("welcomeMsg");
const logoutBtn = document.getElementById("logoutBtn");

// Role sections
const adminSection = document.getElementById("adminSection");
const contributorSection = document.getElementById("contributorSection");
const readerSection = document.getElementById("readerSection");
const viewerSection = document.getElementById("viewerSection");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value.toLowerCase();
  const password = document.getElementById("password").value;

  if (users[username] && users[username].password === password) {
    // Successful login
    const role = users[username].role;
    welcomeMsg.textContent = `Welcome, ${username} (${role})`;

    // Show relevant sections based on role
    adminSection.classList.add("hidden");
    contributorSection.classList.add("hidden");
    readerSection.classList.add("hidden");
    viewerSection.classList.add("hidden");

    if (role === "Admin") adminSection.classList.remove("hidden");
    if (role === "Contributor") contributorSection.classList.remove("hidden");
    if (role === "Reader") readerSection.classList.remove("hidden");
    if (role === "Viewer") viewerSection.classList.remove("hidden");

    // Switch page
    loginPage.classList.add("hidden");
    dashboardPage.classList.remove("hidden");

  } else {
    alert("Invalid username or password!");
  }
});

logoutBtn.addEventListener("click", () => {
  dashboardPage.classList.add("hidden");
  loginPage.classList.remove("hidden");
  loginForm.reset();
});
