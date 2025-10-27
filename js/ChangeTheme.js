// Батырма мен мәтінді табу
const text = document.querySelector('.ThemeInfo');
const toggleBtn = document.querySelector('.themetoggle');

// Алғашқы белгіше мен мәтінді орнату
toggleBtn.innerHTML = '<span class="icon">☀️</span> <span class="ThemeInfo">ЖАРЫҚ</span>';

// Батырма басылған кезде
toggleBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (localStorage.getItem('theme') === 'light') {
    // Егер жарық режим болса — өшіреміз (қараңғыға өтеміз)
    localStorage.removeItem('theme');
  } else {
    // Егер қараңғы режим болса — жарыққа өтеміз
    localStorage.setItem('theme', 'light');
  }

  applyTheme();
});

// Тақырып күйін HTML-ға қолдану
function applyTheme() {
  const icon = toggleBtn.querySelector('.icon');
  const html = document.querySelector('html');

  if (localStorage.getItem('theme') === 'light') {
    html.classList.add('light');
    icon.textContent = '🌙';
    text.textContent = 'ҚАРАҢҒЫЛЫҚ';
  } else {
    html.classList.remove('light');
    icon.textContent = '☀️';
    text.textContent = 'ЖАРЫҚ';
  }
}

// Бетті жүктегенде соңғы таңдалған режимді қалпына келтіру
applyTheme();
