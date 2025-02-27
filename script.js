document.getElementById("btnPlanes").addEventListener("click", function() {
    let planes = document.getElementById("planes");
    if (planes.classList.contains("oculto")) {
        planes.classList.remove("oculto");  // Muestra la sección de planes
    } else {
        planes.classList.add("oculto");  // Oculta la sección de planes
    }
});