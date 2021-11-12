
//

function valorDolar(){

var dolar = 200;
var euro = 250;

let moneda = prompt("Ingrese dolar o euro").toLowerCase();
let resultado = parseInt(prompt("Ingrese Cantidad Deseada"));

if  (isNaN(resultado)){
    alert ("No ingresaste un numero")
}
if (moneda !=="dolar" && moneda !=="euro"){
    alert ("No ingresaste ni euro ni dolar")

}
else if (moneda === "dolar"){
    usd = resultado * dolar;
    alert(usd + " " + "Ars");
    return true
}
else if(moneda === "euro"){
 eur = resultado * euro;
   alert(eur + " " + "Ars");
   return true
}
else (false);{
alert("ingrese datos nuevamente")
}
}

