// Батырма мен мәтінді табамыз
const text = document.querySelector('.ThemeInfo');
const toggleBtn = document.querySelector('.themetoggle');

// Алғашқы белгіше мен мәтінді орнатамыз
toggleBtn.innerHTML = '<span class="icon">☀️</span> <span class="ThemeInfo">ЖАРЫҚ</span>';

// Батырма басылғанда
toggleBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (localStorage.getItem('theme') === 'light') {
    // Егер жарық режим болса — алып тастаймыз (қараңғыға өтеміз)
    localStorage.removeItem('theme');
  } else {
    // Егер қараңғы болса — жарық режимге өтеміз
    localStorage.setItem('theme', 'light');
  }

  applyTheme();
});

// Функция — HTML-ға жарық немесе қараңғы класын қосу
function applyTheme() {
  const icon = toggleBtn.querySelector('.icon');
  const html = document.querySelector('html');

  if (localStorage.getItem('theme') === 'light') {
    html.classList.add('light');
    icon.textContent = '🌙';
  } else {
    html.classList.remove('light');
    icon.textContent = '☀️';
  }
}

// Бетті жүктегенде соңғы күйді қолдану
applyTheme();
