document.getElementById("btnPlanes").addEventListener("click", function() {
    let planes = document.getElementById("planes");
    if (planes.classList.contains("oculto")) {
        planes.classList.remove("oculto");
        planes.style.opacity = 1;  // Se muestra la sección de planes
        setTimeout(() => {
            document.querySelectorAll('.plan').forEach((plan, index) => {
                setTimeout(() => {
                    plan.classList.add('zoom-active');
                }, index * 200);  // Aparecerán uno por uno
            });
        }, 300);  // Espera antes de empezar a mostrar los planes
    } else {
        planes.classList.add("oculto");
        planes.style.opacity = 0;  // Se oculta la sección de planes
    }
});