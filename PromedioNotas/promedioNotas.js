calcularPromedioNotas=function(){
    let nota1 = parseFloat(document.getElementById("txtNota1").value);
    let nota2 = parseFloat(document.getElementById("txtNota2").value);
    let nota3 = parseFloat(document.getElementById("txtNota3").value);
    let promedio = calcularPromedio(nota1, nota2, nota3);
    let img = document.getElementById("imgResultado")
    document.getElementById("resultado").innerText = "El promedio es: " + promedio.toFixed(2);
    if (promedio > 7){
        img.src ="./imagenes/Aprobado.gif";
    }
    else{
        img.src = "./imagenes/Reprobado.gif";
    }
}

calcularPromedio=function(nota1,nota2,nota3){
    return (nota1 + nota2 + nota3) / 3
}
