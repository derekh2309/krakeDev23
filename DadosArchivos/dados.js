jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio)
    if(aleatorio>3){
        cambiarTexto("lblResultado","Es mayor a 3");
        cambiarTexto("lblMensaje","Ganaste");
    }else{
        cambiarTexto("lblMensaje","Es menor a 3");
        cambiarTexto("lblResultado","Perdiste");
    }
}

//Crear una función lanzarDado
//No recibe parametros
//Retorna un numero aleatorio entre 1 y 6

lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado
    aleatorio=Math.random(); //Entre 0 y 1
    numeroMultiplicado=aleatorio*6;
   
    numeroEntero=parseInt(numeroMultiplicado); //Entre 0 y 5
    
    valorDado=numeroEntero+1; //Entre 0 y 6
    
    return valorDado;
}