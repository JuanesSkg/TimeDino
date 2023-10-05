const cardMin = document.getElementById('mins');
const cardHours  = document.getElementById('hours');
const cardDays  = document.getElementById('days');
const cardSeg  = document.getElementById('seg');


function checkTime(){
  var data = new Date()
  // Crear una nueva fecha
  const fechaFutura = new Date('2024-02-24T00:00:00Z');

  let result = fechaFutura - data

  const days = calculateDays(result);
  // Calcula las horas restantes
  const hours = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // Calcula los minutos restantes
  const minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));

  const seg = Math.floor((result % (1000  * 60)) / (1000));

  cardDays.innerHTML = days;
  cardHours.innerHTML = hours;
  cardMin.innerHTML = minutes;
  cardSeg.innerHTML = seg;
}
setInterval("checkTime()",1000) 

function calculateDays(date){
  return Math.floor(date / (1000 * 60 * 60 * 24))
}

