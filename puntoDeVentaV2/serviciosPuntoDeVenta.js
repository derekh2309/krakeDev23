calcularValorDescuento = function (monto, porcentajeDescuento) {
    let valor1;
    let valorDescuento;
    valor1 = monto * porcentajeDescuento;
    valorDescuento = valor1 / 100;
    return valorDescuento;
}
calcularIVA = function (monto) {
    let valorIVA;
    valorIVA = monto * 0.12;
    return valorIVA;
}
calcularSubtotal = function (precio, cantidad) {
    let subtotal;
    subtotal = precio * cantidad;
    return subtotal;
}
calcularTotal = function (subtotal, descuento, iva) {
    let total = (subtotal - descuento) + iva;
    return total;
}

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    let descuento;
    if (cantidad < 3) {
        console.log("No tiene descuento");
    } else if (cantidad >= 3 & cantidad <= 5) {
        descuento = subtotal * 0.03
    } else if (cantidad >= 6 & cantidad <= 11) {
        descuento = subtotal * 0.04;
    } else if (cantidad >= 12) {
        descuento = subtotal * 0.05;
    }
    return descuento;
}