"use strict";

var botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
var avisoCookies = document.getElementById('aviso-cookies');
var fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

if (!localStorage.getItem('cookies-aceptadas')) {
  avisoCookies.classList.add('activo');
  fondoAvisoCookies.classList.add('activo');
}

botonAceptarCookies.addEventListener('click', function () {
  avisoCookies.classList.remove('activo');
  fondoAvisoCookies.classList.remove('activo');
  localStorage.setItem('cookies-aceptadas', true);
});