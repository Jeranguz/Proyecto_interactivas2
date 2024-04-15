const hourLabel = document.getElementById('hour');
const dayLabel = document.getElementById('day');
const dateLabel = document.getElementById('date');
function setActualTime(){
    const now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    hourLabel.innerHTML = hour + ':' + minutes;

    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let day = now.getDay();
    let week = ['Domingo' ,'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    dayLabel.innerHTML = week[day];
    dateLabel.innerHTML = date + '/' + month + '/' + year;
}

setInterval(setActualTime, 1000);