
// Funcion para calcular cambio divisa relacion ars/Usd - ars/euro

// function valorDolar(moneda,resultado){

//     moneda = prompt("Ingrese dolar o euro").toLowerCase();
//     resultado = parseInt(prompt("Ingrese Cantidad Deseada"));

//     let resultadoDolar = multi(resultado,dolar);
//     let resultadoEuro = multi(resultado,euro);


// if  (isNaN(resultado)){
//     alert ("No ingresaste un numero")
// }
// if (moneda !=="dolar" && moneda !=="euro"){
//     alert ("No ingresaste ni euro ni dolar")

// }
// else if (moneda === "dolar"){
    
//     alert("$" + resultadoDolar + " Ars");
//     return true
// }
// else if(moneda === "euro"){

//    alert("$" + resultadoEuro + " Ars");
//    return true
// }
// else if(pregunta === "si"){
//     return 
// }
// else (false);{
// alert("ingrese datos nuevamente")

//  }
// }
//     var dolar = 200;
//     var euro = 250;

//     function multi(a,b){
//     return a*b;
//     }



//Calculo de precios con descuentos e Iva aplicado de ser solicitado

function precios(){

var precio = prompt("Introduzca Precio producto (en Ars): ");
var descuento = prompt("Introduzca descuento (en Ars): ");
 
alert("Precio neto= " + calculoPVP(precio,descuento)[0] + " ars" );
alert("IVA = " + calculoPVP(precio,descuento)[1] + " ars" );
alert("Precio Final = " + calculoPVP(precio,descuento)[2] + " ars");
 
function calculoPVP(precio, descuento) {
      var IVA = 0.21;
      var precioNeto = precio - descuento;
      var cantidadIVA = precio * IVA;
      var PVP = precioNeto + cantidadIVA;
      var calculo = [precioNeto, cantidadIVA, PVP];
 
      return calculo;
}
}

