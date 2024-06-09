export const useSeparateDate = (date)=>{
let dateTimeString = date;

let [datePart, hourPart]= dateTimeString.split(' ');

let [year, month, day] = datePart.split('-');

let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthName = monthNames[parseInt(month) - 1];

let [hours, minutes] = hourPart.split(':').map(Number);

let period = hours >= 12 ? 'pm' : 'am';
hours = hours % 12 || 12;


const hora = `${hours}:${minutes < 10 ? '0' + minutes : minutes}${period}`;

const dia = parseInt(day);
const mes = monthName;
console.log(hora, dia, mes);
return {dia, mes, hora}

}