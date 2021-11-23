//Funcion para calcular cambio divisa relacion ars/Usd - ars/euro

function valorDolar(moneda,resultado){
    moneda = prompt("Ingrese dolar o euro").toLowerCase();
    resultado = parseInt(prompt("Ingrese Cantidad Deseada"));

    let resultadoDolar = multi(resultado,dolar);
    let resultadoEuro = multi(resultado,euro);

    pregunta = confirm("iva incluido?")
    
    iva1 = sumarIva(resultadoEuro);
    iva2 = sumarIva(resultadoDolar);

    if  (isNaN(resultado)){
    alert ("No ingresaste un numero")
          
}
    if (moneda !=="dolar" && moneda !=="euro"){
        alert ("No ingresaste ni euro ni dolar")

    }
    else if (moneda === "dolar"){
       
        if(pregunta){
        alert("Con Iva $" + iva2 + " Ars")
            
        }
        else if (pregunta === false);{
        alert("Sin Iva $" + resultadoDolar + " Ars");
            
        }     
    }
    
    else if(moneda === "euro"){

        if(pregunta === "si"){
            alert("Con Iva $" + iva1 + " Ars")
                
        }
        else if (pregunta === "no");{
        alert("Sin Iva $" + resultadoEuro + " Ars");
            
        } 
}
    else (false);{
    alert("Desea cotizar nuevamente?")
    }
}   
    var dolar = 200;
    var euro = 250;
    
    function sumarIva(precioCosto){
    return (precioCosto + (precioCosto * 0.21));
    }

    function multi(a,b){
    return a*b;
    } 
