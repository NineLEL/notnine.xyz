const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

function setTheme(theme) {
  body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeToggle.checked = theme === "dark";
}

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
});
