
// Funcion para Calcular cuantos USDT necesito para comprar las siguientes criptos BTC - ETH - BAKE
// usdt_btc = "Numero Ingresado" * Valor BTC
// usdt_eth = "numero ingresado" * valor ETH
// usdt_bake = "numero ingresado" * valor bake
// ingrese nuevamente cripto






function calcripto(){

    let cripto = prompt("Ingrese Cripto BTC - ETH - BAKE");
    let usdt = prompt("Ingrese USDT");
    let resultadoBtc = diferencia(usdt,btc);
    let resultadoEth = diferencia(usdt,eth);
    let resultadoBake = diferencia(usdt,bake);
    
 if (cripto === "btc"){
 alert("Son" + " " + resultadoBtc + " " + "BTC");
 
}
 else if (cripto === "eth"){
 alert("Son" + " " + resultadoEth + " " + "ETH");
 
}
else if (cripto === "bake"){
alert("Son" + " " + resultadoBake + " " + "BAKE");

}
else{
    confirm("Otro calculo?");
    return cripto;
    
 }    

}
    var btc = 60000;
    var eth = 4000;
    var bake = 2.5;

    function diferencia(a,b){
        return a/b;
}

