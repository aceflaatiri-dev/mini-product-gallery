const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
}

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  setTheme(isDark ? 'dark' : 'light');
});