// Función para mostrar u ocultar los planes
document.getElementById("btnPlanes").addEventListener("click", function() {
    const planesSection = document.getElementById("planes");
    if (planesSection.classList.contains("oculto")) {
        planesSection.classList.remove("oculto");
    } else {
        planesSection.classList.add("oculto");
    }
});