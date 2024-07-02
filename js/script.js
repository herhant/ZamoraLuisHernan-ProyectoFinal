// Cálculo y limpieza de costos por cantidad

function mostrarCostoPorCantidad() {
    const numFotos = document.getElementById('numFotos').value;
    const numVideos = document.getElementById('numVideos').value;
    const numSitios = document.getElementById('numSitios').value;

    const costoFotos = numFotos * 25;
    const costoVideos = numVideos * 75;
    const costoSitios = numSitios * 1000;

    const costoTotal = costoFotos + costoVideos + costoSitios;

    document.getElementById('resultadoCantidad').innerText = `Costo Total: $${costoTotal.toFixed(2)}`;

    const botonCalcular = document.getElementById('botonCalcularCantidad');
    if (costoTotal > 0) {
        botonCalcular.innerText = 'Limpiar';
        botonCalcular.onclick = limpiarCostoPorCantidad;
    }
}

function limpiarCostoPorCantidad() {
    document.getElementById('numFotos').value = 0;
    document.getElementById('numVideos').value = 0;
    document.getElementById('numSitios').value = 0;
    document.getElementById('resultadoCantidad').innerText = 'Costo Total: $0.00';

    const botonCalcular = document.getElementById('botonCalcularCantidad');
    botonCalcular.innerText = 'Calcular Costo';
    botonCalcular.onclick = mostrarCostoPorCantidad;
}

// Cálculo y limpieza de costos por servicio

function mostrarCostoPorServicio() {
    const tipoFoto = document.getElementById('tipoFoto').value;
    const numEdicionesFoto = document.getElementById('numEdicionesFoto').value;
    const tipoVideo = document.getElementById('tipoVideo').value;
    const numEdicionesVideo = document.getElementById('numEdicionesVideo').value;
    const tipoSitio = document.getElementById('tipoSitio').value;
    const numSitios = document.getElementById('numSitiosServicio').value;

    const costoFoto = tipoFoto * numEdicionesFoto;
    const costoVideo = tipoVideo * numEdicionesVideo;
    const costoSitio = tipoSitio * numSitios;

    const costoTotal = costoFoto + costoVideo + costoSitio;

    document.getElementById('resultadoServicio').innerText = `Costo Total: $${costoTotal.toFixed(2)}`;

    const botonCalcular = document.getElementById('botonCalcularServicio');
    if (costoTotal > 0) {
        botonCalcular.innerText = 'Limpiar';
        botonCalcular.onclick = limpiarCostoPorServicio;
    }
}

function limpiarCostoPorServicio() {
    document.getElementById('tipoFoto').value = 0;
    document.getElementById('numEdicionesFoto').value = 0;
    document.getElementById('tipoVideo').value = 0;
    document.getElementById('numEdicionesVideo').value = 0;
    document.getElementById('tipoSitio').value = 0;
    document.getElementById('numSitiosServicio').value = 0;
    document.getElementById('resultadoServicio').innerText = 'Costo Total: $0.00';

    const botonCalcular = document.getElementById('botonCalcularServicio');
    botonCalcular.innerText = 'Calcular Costo';
    botonCalcular.onclick = mostrarCostoPorServicio;
}

// Guardar configuraciones en localStorage
function guardarConfiguracion() {
    const configuracion = {
        numFotos: document.getElementById("numFotos").value,
        numVideos: document.getElementById("numVideos").value,
        numSitios: document.getElementById("numSitios").value,
        tipoFoto: document.getElementById("tipoFoto").value,
        numEdicionesFoto: document.getElementById("numEdicionesFoto").value,
        tipoVideo: document.getElementById("tipoVideo").value,
        numEdicionesVideo: document.getElementById("numEdicionesVideo").value,
        tipoSitio: document.getElementById("tipoSitio").value,
        numSitiosServicio: document.getElementById("numSitiosServicio").value
    };

    localStorage.setItem('configuracionServicios', JSON.stringify(configuracion));
}

// Cargar configuraciones desde localStorage
function cargarConfiguracion() {
    const configuracionGuardada = localStorage.getItem('configuracionServicios');
    if (configuracionGuardada) {
        const configuracion = JSON.parse(configuracionGuardada);


        document.getElementById("numFotos").value = configuracion.numFotos || 0;
        document.getElementById("numVideos").value = configuracion.numVideos || 0;
        document.getElementById("numSitios").value = configuracion.numSitios || 0;


        document.getElementById("tipoFoto").value = configuracion.tipoFoto || '600'; // Valor por defecto si no está definido
        document.getElementById("numEdicionesFoto").value = configuracion.numEdicionesFoto || 0;
        document.getElementById("tipoVideo").value = configuracion.tipoVideo || '1000'; // Valor por defecto si no está definido
        document.getElementById("numEdicionesVideo").value = configuracion.numEdicionesVideo || 0;
        document.getElementById("tipoSitio").value = configuracion.tipoSitio || '1000'; // Valor por defecto si no está definido
        document.getElementById("numSitiosServicio").value = configuracion.numSitiosServicio || 0;
    }
}

// Event Listeners
document.getElementById("botonGuardarConfiguracion").addEventListener('click', guardarConfiguracion);
document.getElementById("botonCargarConfiguracion").addEventListener('click', cargarConfiguracion);




// Limpiar todos los campos de costos y servicios

function limpiarCosto() {
    limpiarCostoPorCantidad();
    limpiarCostoPorServicio();
}


document.getElementById("botonLimpiar").addEventListener('click', limpiarCosto);
document.getElementById("botonLimpiarServicio").addEventListener('click', limpiarCosto);
