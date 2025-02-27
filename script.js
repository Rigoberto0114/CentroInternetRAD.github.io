// Función para mostrar u ocultar los planes
document.getElementById("btnPlanes").addEventListener("click", function() {
    const planesSection = document.getElementById("planes");
    if (planesSection.classList.contains("oculto")) {
        planesSection.classList.remove("oculto");
    } else {
        planesSection.classList.add("oculto");
    }
});

// Crear un observador de intersección para detectar cuando un plan entra en la vista
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Cuando el plan entra en la vista, añadir la clase 'visible'
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Deja de observar este plan una vez se ha mostrado
        }
    });
}, {
    threshold: 0.1 // El plan debe estar al 10% dentro de la vista para que se active
});

// Seleccionar todos los planes y empezar a observarlos
document.querySelectorAll('.plan').forEach(plan => {
    observer.observe(plan);
});