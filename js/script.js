function mostrarCostoPorCantidad() {
    const numFotos = parseInt(document.getElementById("numFotos").value) || 0;
    const numVideos = parseInt(document.getElementById("numVideos").value) || 0;
    const numSitios = parseInt(document.getElementById("numSitios").value) || 0;

    const costoTotal = (numFotos * 200) + (numVideos * 300) + (numSitios * 400);
    document.getElementById("resultadoCantidad").textContent = `Costo Total: $${costoTotal.toFixed(2)}`;

    const botonCalcular = document.getElementById("botonCalcularCantidad");

    if (costoTotal > 0) {
        botonCalcular.textContent = 'Limpiar';
        botonCalcular.onclick = function() {
            document.getElementById("numFotos").value = 0;
            document.getElementById("numVideos").value = 0;
            document.getElementById("numSitios").value = 0;
            document.getElementById("resultadoCantidad").textContent = 'Costo Total: $0.00';
            botonCalcular.textContent = 'Calcular Costo';
            botonCalcular.onclick = mostrarCostoPorCantidad;
        };
    } else {
        botonCalcular.textContent = 'Calcular Costo';
        botonCalcular.onclick = mostrarCostoPorCantidad;
    }
}

function mostrarCostoPorServicio() {
    const tipoFoto = parseInt(document.getElementById("tipoFoto").value) || 0;
    const numEdicionesFoto = parseInt(document.getElementById("numEdicionesFoto").value) || 0;
    const tipoVideo = parseInt(document.getElementById("tipoVideo").value) || 0;
    const numEdicionesVideo = parseInt(document.getElementById("numEdicionesVideo").value) || 0;
    const tipoSitio = parseInt(document.getElementById("tipoSitio").value) || 0;

    const costoTotal = tipoFoto + (numEdicionesFoto * 100) + tipoVideo + (numEdicionesVideo * 200) + tipoSitio;
    document.getElementById("resultadoServicio").textContent = `Costo Total: $${costoTotal.toFixed(2)}`;

    const botonCalcular = document.getElementById("botonCalcularServicio");

    if (costoTotal > 0) {
        botonCalcular.textContent = 'Limpiar';
        botonCalcular.onclick = function() {
            document.getElementById("tipoFoto").value = 0;
            document.getElementById("numEdicionesFoto").value = 0;
            document.getElementById("tipoVideo").value = 0;
            document.getElementById("numEdicionesVideo").value = 0;
            document.getElementById("tipoSitio").value = 0;
            document.getElementById("resultadoServicio").textContent = 'Costo Total: $0.00';
            botonCalcular.textContent = 'Calcular Costo';
            botonCalcular.onclick = mostrarCostoPorServicio;
        };
    } else {
        botonCalcular.textContent = 'Calcular Costo';
        botonCalcular.onclick = mostrarCostoPorServicio;
    }
}
