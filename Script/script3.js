
//Calculo de precios con descuentos e Iva aplicado de ser solicitado

function precios(){

var precio = prompt("Introduzca Precio producto en $Ars: ");
var descuento = prompt("Introduzca descuento en $Ars: ");
 
alert("Precio neto = " + calculoPVP(precio,descuento)[0] + "$ ars" );
alert("IVA = " + calculoPVP(precio,descuento)[1] + "$ ars" );
alert("Precio Final = " + calculoPVP(precio,descuento)[2] + "$ ars");
 
function calculoPVP(precio, descuento) {
      var IVA = 0.21;
      var precioNeto = precio - descuento;
      var cantidadIVA = precio * IVA;
      var PVP = precioNeto + cantidadIVA;
      var calculo = [precioNeto, cantidadIVA, PVP];
 
      return calculo;
      }
}

