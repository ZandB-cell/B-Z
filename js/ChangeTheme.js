// Тақырыпты ақ/қараға ауыстыру (жақсартылған нұсқа)

const text = document.querySelector('.ThemeInfo');

document.querySelector('.themetoggle').addEventListener('click', (event) => {
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
            text.innerText = 'Қараңғы режим';
        } else {
            document.querySelector('html').classList.remove('light');
            text.innerText = 'Жарық режим';
        }

        // Қазақ қарпін анық әрі үлкен етіп көрсету
        text.style.fontFamily = '"Noto Sans", Arial, Helvetica, sans-serif';
        text.style.fontSize = '20px';
        text.style.fontWeight = '600';
        text.style.letterSpacing = '0.5px';
        text.style.textTransform = 'none';
        text.style.transition = 'all 0.3s ease';
        text.style.cursor = 'pointer';
        text.style.userSelect = 'none';
        
        // Түс ауыстыру (жарық/қара тақырыпқа байланысты)
        if (document.querySelector('html').classList.contains('light')) {
            text.style.color = '#111';
        } else {
            text.style.color = '#f5f5f5';
        }
    } catch (err) { }
}

addlightClassToHTML();
