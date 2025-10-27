const text = document.querySelector('.ThemeInfo');
const toggleBtn = document.querySelector('.themetoggle');
const icon = toggleBtn.querySelector('.icon');

toggleBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'light') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'light');
  }
  addlightClassToHTML();
});

function addlightClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'light') {
      document.querySelector('html').classList.add('light');
      text.innerText = 'ҚАРАҢҒЫЛЫҚ';
      icon.textContent = '🌙';
    } else {
      document.querySelector('html').classList.remove('light');
      text.innerText = 'ЖАРЫҚ';
      icon.textContent = '☀️';
    }
  } catch (err) {}
}

addlightClassToHTML();
