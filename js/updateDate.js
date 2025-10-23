// Пішім: Сәрсенбі, 3 апта Желтоқсан 2021 жыл

const date = new Date(document.lastModified);

const weekDays = ['0','Дүйсенбі', 'Сейсенбі', 'Сәрсенбі', 'Бейсенбі', 'Жұма', 'Сенбі', 'Жексенбі'];
const monthNames = ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'];

let day = date.getDay();
let week = getNumberOfWeek();
let month = date.getMonth();
const year = date.getFullYear();

let dataUpdate = `${weekDays[day]}, ${week} апта ${monthNames[month]} ${year} жыл`;

function getNumberOfWeek() {
    const today = date;
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

console.log(dataUpdate);
