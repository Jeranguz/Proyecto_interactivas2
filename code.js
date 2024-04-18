const hourLabel = document.getElementById('hour');
const dayLabel = document.getElementById('day');
const dateLabel = document.getElementById('date');
function setActualTime(){
    const now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    
    hourLabel.innerHTML = hour + ':' + minutes;

    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let day = now.getDay();
    if (date < 10) {
        date = '0' + date;
    }
    if (month < 10) {
        month = '0' + month;
    }
    let week = ['Domingo' ,'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    dayLabel.innerHTML = week[day];
    dateLabel.innerHTML = date + '/' + month + '/' + year;

}

setInterval(setActualTime, 1000);

//Llamado a la creacion del calendario

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      //sirve para permitir que se seleccione una celda
      selectable: true,
      //sirve para acomodar el header del calendario
      headerToolbar: { 
        start: 'timeGridDay,timeGridWeek,dayGridMonth',
        center: 'title',
        end: 'today,prev,next'
      },
      //Funcion para cuando se precione una celda del calendario
      dateClick: function(info) {
        alert('clicked ' + info.dateStr);
      },
      //sirve para activar el indicador de que hora es en el calendario
      nowIndicator: true,
      now: new Date(),
    
    });
    calendar.render();
  });