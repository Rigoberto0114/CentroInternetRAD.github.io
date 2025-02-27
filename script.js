document.getElementById("btnPlanes").addEventListener("click", function() {
    let planes = document.getElementById("planes");
    if (planes.classList.contains("oculto")) {
        planes.classList.remove("oculto");
    } else {
        planes.classList.add("oculto");
    }
});