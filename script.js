const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

/**
 * Sets the theme and saves it to localStorage.
 * @param {string} theme - 'light' or 'dark'
 */
function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  if (themeToggle) {
    themeToggle.checked = theme === "dark";
  }
}

if (themeToggle) {
  const currentTheme = root.getAttribute("data-theme") || localStorage.getItem("theme") || "dark";
  themeToggle.checked = currentTheme === "dark";

  themeToggle.addEventListener("change", () => {
    setTheme(themeToggle.checked ? "dark" : "light");
  });
}
