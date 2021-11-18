//Funcion para calcular cambio divisa relacion ars/Usd - ars/euro



function valorDolar(moneda,resultado){

    moneda = prompt("Ingrese dolar o euro").toLowerCase();
    
    resultado = parseInt(prompt("Ingrese Cantidad Deseada"));
    

    let resultadoDolar = multi(resultado,dolar);
    let resultadoEuro = multi(resultado,euro);
    iva1 = sumarIva(resultadoEuro);
    iva2 = sumarIva(resultadoDolar);

if  (isNaN(resultado)){
    alert ("No ingresaste un numero")
          
}
    if (moneda !=="dolar" && moneda !=="euro"){
        alert ("No ingresaste ni euro ni dolar")

    }
    
    else if (moneda === "dolar"){
        pregunta = prompt("iva incluido? escribe si o no")

        if(pregunta === "si"){

        alert("Con Iva " + iva2 + "\n"
        + "Sin Iva " + resultadoDolar)
            return true
        }
        else if (pregunta === "no");{
        alert("$" + resultadoDolar + " Ars");
            
        } 
        
    }
    
    else if(moneda === "euro"){

        alert("$" + resultadoEuro + " Ars");
        return true
    }      
     
    else (false);{
    alert("ingrese datos nuevamente")

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
    

