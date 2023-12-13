/*** FECHA ***/
const fechaElement = document.getElementById("fecha_de_hoy");

if (fechaElement) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    fechaElement.innerHTML = new Date().toLocaleDateString('es-ES', options);
}
