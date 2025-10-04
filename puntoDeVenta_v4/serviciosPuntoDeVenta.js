calcularValorDescuento=function(monto, porcentajeDescuento){
    return (monto * porcentajeDescuento) / 100;
}

calcularIva=function(monto){
    const IVA = 12;
    return (monto * IVA) / 100
}

calcularSubtotal=function(precio, cantidad){
    return precio * cantidad
}

calcularTotal=function(subtotal, descuento, IVA){
    return subtotal - descuento + IVA
}