// Мәзір үшін скролл
document.getElementById('main-info').onclick = function () {
    document.getElementById('chairs').scrollIntoView({behavior: 'smooth'})
}

// header-дегі сілтемелер

let links = document.querySelectorAll('.menu-item > a')
for (let i = 0; i < links.length; i++){
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: 'smooth'})
    }
}

// footer-дегі сілтемелер

let footerLinks = document.querySelectorAll('.footer-item > a')
for (let i = 0; i < footerLinks.length; i++){
    footerLinks[i].onclick = function () {
        document.getElementById(footerLinks[i].getAttribute("data-link")).scrollIntoView({behavior: 'smooth'})
    }
}


// Менеджерге деректерді жіберуге арналған инпуттарды валидациялау

const helpInfo = document.querySelector('.help-form-inputs')
const helpText = document.querySelector('.help-form-text')
const helpButton = document.querySelector('#help-action')
const helpContent = document.querySelector('#helpText')
const person = document.querySelector('#name')
const phone = document.querySelector('#phone')

helpButton.addEventListener('click', function () {

    let hasError = false
    const info = [helpContent, person, phone]

    info.forEach(item => {
        if (!item.value){
            item.parentElement.style.background = 'red'
            hasError = true
            
        } else {
            item.parentElement.style.background = ''
        }
    })

    if (!hasError){
        info.forEach(item => {
            item.value = ''
        })
        helpInfo.classList.add('none')
        helpText.innerText = 'Біз жақында сізбен хабарласамыз!'
    }
})
