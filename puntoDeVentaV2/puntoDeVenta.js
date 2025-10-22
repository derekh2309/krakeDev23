calcularValorTotal = function () {
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    nombreProducto = recuperarTexto("txtProducto");
    esProductoValido = function (nombreProducto, idComponenteError) {
        let hayError = false;
        if (nombreProducto == "") {
            hayError = true;
            mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        }
        if (nombreProducto.length > 10) {
            hayError = true;
            mostrarTexto(idComponenteError, "EL NOMBRE DEBE TENER MAXIMO 10 CARACTERES");
        }
        if (hayError == false) {
            mostrarTexto(idComponenteError, " ");
        }
        return !hayError;
    }
    cantidad = recuperarInt("txtCantidad");
    esCantidadValida = function (cantidad, idComponenteError) {
        let hayError = false;
        if (isNaN(cantidad)) {
            mostrarTexto(idComponenteError, "DEBE INGRESAR UN NUMERO");
            hayError = true;
        }
        if (cantidad == "") {
            mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
            hayError = true;
        }
        if (cantidad <= 0 || cantidad > 100) {
            mostrarTexto(idComponenteError, "LA CANTIDAD DEBE SER MINIMO 1 Y MAXIMO 100");
        }
        if (hayError == false) {
            mostrarTexto(idComponenteError, " ");
        }
        return !hayError;
    }
    precioProducto = recuperarFloat("txtValor");
    esPrecioValido = function (precioProducto, idComponenteError) {
        let hayError = false;
        if (isNaN(precioProducto)) {
            mostrarTexto(idComponenteError, "DEBE INGRESAR UN NUMERO");
            hayError = true;
        }
        if (precioProducto == "") {
            mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
            hayError = true;
        }
        if (precioProducto <= 0 || precioProducto > 50) {
            mostrarTexto(idComponenteError, "LA CANTIDAD DEBE SER MAXIMO 50");
        }
        if (hayError == false) {
            mostrarTexto(idComponenteError, " ");
        }
        return !hayError;
    }
    if (esProductoValido(nombreProducto, "lblError1") & esCantidadValida(cantidad, "lblError2") & esPrecioValido(precioProducto, "lblError3")) {
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal)
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        mostrarTexto("lblDescuento", valorDescuento);
        let subtotal = valorSubtotal - valorDescuento;
        valorIVA = calcularIVA(subtotal);
        valorIVAF = valorIVA.toFixed(2);
        mostrarTexto("lblIVA", valorIVAF);
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        valorTotalF = valorTotal.toFixed(2);
        mostrarTexto("lblTotal", valorTotalF);
    }
}
limpiar = function () {
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "");
    mostrarTextoEnCaja("txtValor", "");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
}