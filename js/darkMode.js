const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.contains("light-theme")
    ? enableDarkMode()
    : enableLightMode();
});

function enableDarkMode() {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
  themeToggle.setAttribute("aria-label", "Switch to light theme");

  localStorage.setItem("theme", "dark");
}

function enableLightMode() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
  themeToggle.setAttribute("aria-label", "Switch to dark theme");
  localStorage.setItem("theme", "light");
}

function setThemePreference() {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark") {
    enableDarkMode();
    return;
  }

  enableLightMode();
}

window.onload = setThemePreference;