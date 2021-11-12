
// Funcion para Calcular cuantos USDT necesito para comprar las siguientes criptos BTC - ETH - BAKE
// usdt_btc = "Numero Ingresado" * Valor BTC
// usdt_eth = "numero ingresado" * valor ETH
// usdt_bake = "numero ingresado" * valor bake
// ingrese nuevamente cripto

function calcripto(){

var btc = 60000;
var eth = 4000;
var bake = 2.5;

let cripto = prompt("Ingrese Cripto BTC - ETH - BAKE");
let usdt = prompt("Ingrese USDT");


 if (cripto === "btc"){
 usdt_btc = usdt / btc;
 alert("Son" + " " + usdt_btc + " " + "BTC");
 
 }
 else if (cripto === "eth"){
 usdt_eth = usdt / eth;
 alert("Son" + " " + usdt_eth + " " + "ETH");
 
}

else if (cripto === "bake"){
usdt_bake = usdt / bake;
alert("Son" + " " + usdt_bake + " " + "BAKE");

}else{
    confirm("Otro calculo?");
    return cripto;
    
 }   
}
