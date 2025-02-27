// Función para mostrar u ocultar los planes
document.getElementById("btnPlanes").addEventListener("click", function() {
    const planesSection = document.getElementById("planes");
    if (planesSection.classList.contains("oculto")) {
        planesSection.classList.remove("oculto");
    } else {
        planesSection.classList.add("oculto");
    }
});

// Función para hacer aparecer los planes cuando el usuario hace scroll
window.addEventListener("scroll", function() {
    const planes = document.querySelectorAll(".plan");
    const scrollPosition = window.scrollY + window.innerHeight;

    planes.forEach(function(plan) {
        const planPosition = plan.offsetTop + plan.offsetHeight;

        if (scrollPosition >= planPosition) {
            plan.classList.add("visible");
        }
    });
});