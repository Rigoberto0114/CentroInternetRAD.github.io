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
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.querySelector("input[type='text']").value;
        let password = document.querySelector("input[type='password']").value;

        // Aquí puedes agregar validaciones
        if (email === "usuario@example.com" && password === "1234") {
            alert("Inicio de sesión exitoso");
            window.location.href = "planes.html"; // Redirige a otra página
        } else {
            alert("Correo o contraseña incorrectos");
        }
    });
});