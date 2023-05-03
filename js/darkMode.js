const modeSwitcher = $(".mode-switcher");
const themeStoredKey = "ThemeColor";
const darkTheme_class = "dark-theme";
const lightTheme_class = "light-theme";
const themeStoredItem = localStorage.getItem(themeStoredKey);



function setThemeMode(themeColor) {
    if (themeColor === darkTheme_class) {
      pageBody.addClass(darkTheme_class);
      modeSwitcher.addClass(darkTheme_class).removeClass(lightTheme_class);
      localStorage.setItem(themeStoredKey, darkTheme_class);
      localStorage.removeItem(lightTheme_class);
    }
    if (themeColor === lightTheme_class) {
      pageBody.removeClass(darkTheme_class);
      modeSwitcher.addClass(lightTheme_class).removeClass(darkTheme_class);
      localStorage.setItem(themeStoredKey, lightTheme_class);
      localStorage.removeItem(darkTheme_class);
    }
  }

  /* *******  Set the theme according to the local storage value ********/
  // if local storge not set or the body has class value of .dark-theme THEN default theme is dark
  if (!themeStoredItem && !pageBody.hasClass(darkTheme_class)) {
    setThemeMode(darkTheme_class);
  }
  // the only case to be light mode is when the local storge has he value of light-theme
  if (themeStoredItem === lightTheme_class) {
    setThemeMode(lightTheme_class);
  }

  // if local storge or the body has class value of .dark-theme
  if (
    themeStoredItem === darkTheme_class ||
    pageBody.hasClass(darkTheme_class)
  ) {
    setThemeMode(darkTheme_class);
  }

  /* ******* Set the theme by clicking the theme switcher ********/
  $(modeSwitcher).on("click", function () {
    if ($(this).is("." + darkTheme_class)) {
      setThemeMode(lightTheme_class);
    } else if ($(this).is("." + lightTheme_class)) {
      setThemeMode(darkTheme_class);
    }
  });