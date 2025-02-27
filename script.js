document.addEventListener("DOMContentLoaded", function () {
    // Función para mostrar mensajes en la página
    function mostrarMensaje(texto, tipo = "success") {
        let mensajeDiv = document.createElement("div");
        mensajeDiv.textContent = texto;
        mensajeDiv.classList.add(tipo === "success" ? "mensaje-exito" : "mensaje-error");

        document.body.appendChild(mensajeDiv);

        // Eliminar mensaje después de 3 segundos
        setTimeout(() => {
            mensajeDiv.remove();
        }, 3000);
    }

    // Simulación de compra
    document.getElementById("form-compra")?.addEventListener("submit", function (e) {
        e.preventDefault();
        
        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let producto = document.getElementById("producto").value;
        let metodoPago = document.getElementById("metodo-pago").value;

        if (nombre === "" || email === "" || producto === "" || metodoPago === "") {
            mostrarMensaje("Por favor, completa todos los campos.", "error");
            return;
        }

        // Aquí podrías integrar una pasarela de pago real
        mostrarMensaje(`Compra exitosa: ${producto} adquirido por ${nombre}.`, "success");

        // Limpiar formulario
        this.reset();
    });

});