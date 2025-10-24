// тақырыпты ақ/қараға ауыстыру 
const text = document.querySelector('.ThemeInfo') 
    document.querySelector('.themetoggle').addEventListener('click', (event) => { 
        event.preventDefault();
        if (localStorage.getItem('theme') === 'light') { 
            localStorage.removeItem('theme'); 
        } 
        else { 
            localStorage.setItem('theme', 'light') 
        }
        addlightClassToHTML() 
    }); 
function addlightClassToHTML() {
    try { 
        if (localStorage.getItem('theme') === 'light') 
        { 
            document.querySelector('html').classList.add('light');
            text.innerText = 'ҚАРАҢҒЫЛЫҚ' 
        }
        else 
        { 
            document.querySelector('html').classList.remove('light'); 
            text.innerText = 'ЖАРЫҚ' 
        } 
    }
    catch (err) { } 
} 
addlightClassToHTML();
