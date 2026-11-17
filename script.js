
/* CONTADOR DE VISITAS */

let visitas = Number(localStorage.getItem("visitas")) || 0;

visitas++;

localStorage.setItem("visitas", visitas);

document.getElementById("visitas").textContent = visitas;


/* FORMULARIO */

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

  event.preventDefault();

  let nombre = document.getElementById("nombre").value;

  alert("¡Gracias por contactarnos, " + nombre + "!");

  formulario.reset();

});
