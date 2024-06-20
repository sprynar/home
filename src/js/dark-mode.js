function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cname) == 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}

function checkDarkModeCookie() {
  const darkMode = getCookie("darkMode");
  if (darkMode == "enabled") {
    document.body.classList.add("dark-mode");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  checkDarkModeCookie();
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const darkMode = document.body.classList.contains('dark-mode') ? "enabled" : "disabled";
    setCookie("darkMode", darkMode, 365);
  });
});
