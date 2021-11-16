
//

function valorDolar(){

    let moneda = prompt("Ingrese dolar o euro").toLowerCase();
    let resultado = parseInt(prompt("Ingrese Cantidad Deseada"));
    let resultadoDolar = multi(resultado,dolar);
    let resultadoEuro = multi(resultado,euro);

if  (isNaN(resultado)){
    alert ("No ingresaste un numero")
}
if (moneda !=="dolar" && moneda !=="euro"){
    alert ("No ingresaste ni euro ni dolar")

}
else if (moneda === "dolar"){
    
    alert(resultadoDolar + " Ars");
    return true
}
else if(moneda === "euro"){

   alert(resultadoEuro + " Ars");
   return true
}
else (false);{
alert("ingrese datos nuevamente")

 }
}
    var dolar = 200;
    var euro = 250;

    function multi(a,b){
    return a*b;
}