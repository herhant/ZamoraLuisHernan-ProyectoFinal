// Funciones auxiliares para manejar el localStorage
const saveToLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving to localStorage', error);
    }
};

const loadFromLocalStorage = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        console.error('Error loading from localStorage', error);
        return null;
    }
};

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("porCantidad-tab").addEventListener("click", mostrarCostoPorCantidad);
    document.getElementById("porServicio-tab").addEventListener("click", mostrarCostoPorServicio);

    showWikipediaData();

    const numFotosInput = document.getElementById('numFotos');
    const numVideosInput = document.getElementById('numVideos');
    const numSitiosInput = document.getElementById('numSitios');

    const tipoFotoInput = document.getElementById('tipoFoto');
    const numEdicionesFotoInput = document.getElementById('numEdicionesFoto');
    const tipoVideoInput = document.getElementById('tipoVideo');
    const numEdicionesVideoInput = document.getElementById('numEdicionesVideo');
    const tipoSitioInput = document.getElementById('tipoSitio');
    const numSitiosServicioInput = document.getElementById('numSitiosServicio');

    if(numFotosInput && numVideosInput && numSitiosInput) {
        numFotosInput.addEventListener('input', mostrarCostoPorCantidad);
        numVideosInput.addEventListener('input', mostrarCostoPorCantidad);
        numSitiosInput.addEventListener('input', mostrarCostoPorCantidad);
        }
    if (tipoFotoInput && numEdicionesFotoInput && tipoVideoInput && numEdicionesVideoInput && tipoSitioInput && numSitiosServicioInput) {
        tipoFotoInput.addEventListener('input', mostrarCostoPorServicio);
        numEdicionesFotoInput.addEventListener('input', mostrarCostoPorServicio);
        tipoVideoInput.addEventListener('input', mostrarCostoPorServicio);
        numEdicionesVideoInput.addEventListener('input', mostrarCostoPorServicio);
        tipoSitioInput.addEventListener('input', mostrarCostoPorServicio);
        numSitiosServicioInput.addEventListener('input', mostrarCostoPorServicio);
    }
    
    document.getElementById("agregarAlCarrito").addEventListener("click", () => {
        Swal.fire({
            title: '¡Añadido al Carrito!',
            text: 'Los productos han sido añadidos al carrito exitosamente.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    });
    
    document.getElementById("limpiarValores").addEventListener("click", limpiarValores);
});

function mostrarCostoPorCantidad() {
    const numFotos = parseInt(document.getElementById("numFotos").value) || 0;
    const numVideos = parseInt(document.getElementById("numVideos").value) || 0;
    const numSitios = parseInt(document.getElementById("numSitios").value) || 0;
    const costoFotos = numFotos * 100;
    const costoVideos = numVideos * 200;
    const costoSitios = numSitios * 500;

    const costoTotal = costoFotos + costoVideos + costoSitios;

    document.getElementById("resultadoCantidad").textContent = `Costo Total: $${costoTotal.toFixed(2)}`;
}

function mostrarCostoPorServicio() {
    const tipoFoto = parseFloat(document.getElementById("tipoFoto").value) || 0;
    const numEdicionesFoto = parseInt(document.getElementById("numEdicionesFoto").value) || 0;
    const tipoVideo = parseFloat(document.getElementById("tipoVideo").value) || 0;
    const numEdicionesVideo = parseInt(document.getElementById("numEdicionesVideo").value) || 0;
    const tipoSitio = parseFloat(document.getElementById("tipoSitio").value) || 0;
    const numSitiosServicio = parseInt(document.getElementById("numSitiosServicio").value) || 0;
    const costoFoto = tipoFoto * numEdicionesFoto;
const costoVideo = tipoVideo * numEdicionesVideo;
const costoSitio = tipoSitio * numSitiosServicio;

const costoTotal = costoFoto + costoVideo + costoSitio;

document.getElementById("resultadoServicio").textContent = `Costo Total: $${costoTotal.toFixed(2)}`;
}

function limpiarValores() {
    document.getElementById("numFotos").value = 0;
    document.getElementById("numVideos").value = 0;
    document.getElementById("numSitios").value = 0;
    document.getElementById("tipoFoto").selectedIndex = 0;
    document.getElementById("numEdicionesFoto").value = 0;
    document.getElementById("tipoVideo").selectedIndex = 0;
    document.getElementById("numEdicionesVideo").value = 0;
    document.getElementById("tipoSitio").selectedIndex = 0;
    document.getElementById("numSitiosServicio").value = 0;
    document.getElementById("resultadoCantidad").textContent = "Costo Total: $0.00";
document.getElementById("resultadoServicio").textContent = "Costo Total: $0.00";
}

// API de Wikipedia
const fetchWikipediaData = async (searchTerm) => {
    const apiUrl = `https://es.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&origin=*&titles=${searchTerm}`;
    try {
        const response = await axios.get(apiUrl);
        const pages = response.data.query.pages;
        const page = Object.values(pages)[0];
        return page.extract;
    } catch (error) {
        console.error('Error fetching Wikipedia data', error);
        return 'No se pudo obtener información de Wikipedia en este momento.';
    }
};

// Mostrar datos en el DOM
const showWikipediaData = async () => {
    const searchTerm = 'Fotografía'; 
    const contentDiv = document.getElementById('fotografia-content');
    const data = await fetchWikipediaData(searchTerm);
    
    const item = `
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Técnicas de fotografía
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    ${data}
                </div>
            </div>
        </div>
    `;
    contentDiv.innerHTML = item;
};