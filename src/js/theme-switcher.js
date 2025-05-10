export function handleChangeTheme() {
  if (document.body.classList.contains('theme-dark')) {
    setlightThemeLocaleStorage();
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
  } else {
    setdarkThemeLocaleStorage();
    document.body.classList.add('theme-dark');
    document.body.classList.remove('theme-light');
  }
}

export function startTheme() {
  if (getThemeLocaleStorage() === 'dark') {
    document.body.classList.add('theme-dark');
    document.body.classList.remove('theme-light');
  } else {
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
  }
}

function setdarkThemeLocaleStorage() {
  localStorage.setItem('theme', 'dark');
}
function setlightThemeLocaleStorage() {
  localStorage.setItem('theme', 'light');
}
function getThemeLocaleStorage() {
  return localStorage.getItem('theme');
}
