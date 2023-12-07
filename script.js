function actualizarHora() {
  var fecha = new Date();
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();

  var horaString = [hora, agregarCero(minutos), agregarCero(segundos)].join(":");
  document.getElementById("hora").innerHTML = horaString;
}

setInterval(actualizarHora, 1000);

function agregarCero(numero) {
  return numero < 10 ? "0" + numero : numero;
}
