/*** FECHA ***/
const fechaElement = document.getElementById("fecha_de_hoy");

if (fechaElement) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    fechaElement.innerHTML = new Date().toLocaleDateString('es-ES', options);
}

function calcular() {
    // Obtener los valores de los inputs
    const litros = parseFloat(document.getElementById("litros").value);
    const ppmInicial = parseFloat(document.getElementById("valor1").value);
    const ppmDeseado = parseFloat(document.getElementById("ppm").value);

    // Calcular la cantidad de gramos de cloro
    const diferenciaPPM = ppmDeseado - ppmInicial;
    const gramosCloro = (diferenciaPPM * litros) / 1000;

    // Mostrar el resultado en el input correspondiente
    document.getElementById("gramos").textContent = `Cantidad de Gramos: ${gramosCloro}`;
}

function volumen() {
    // Obtener los valores de los inputs
    const largo = parseFloat(document.getElementById("largo").value);
    const ancho = parseFloat(document.getElementById("ancho").value);
    const profundidad = parseFloat(document.getElementById("hondo").value);

    // Calcular la cantidad de gramos de cloro
    const cantidad = ((largo * ancho) * profundidad) * 1000;


    // Mostrar el resultado en el input correspondiente
    document.getElementById("volumen").textContent = `Tu pileta tiene: ${cantidad} litros`;
}

