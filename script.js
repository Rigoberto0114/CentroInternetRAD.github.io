function comprar() {
    alert("¡Tu pedido ha sido agregado al carrito!");
}

function realizarPago() {
    let metodo = prompt("¿Cómo deseas pagar? (Yappy, PayPal, Transferencia)");
    if (metodo) {
        alert("Redirigiendo a " + metodo + "...");
    } else {
        alert("Método de pago no seleccionado.");
    }
}