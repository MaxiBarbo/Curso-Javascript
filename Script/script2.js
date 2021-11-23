// Prueba calculadora realizada en after class

    function calculadora(){
var numero1 = prompt("Numero 1");

var numero2 = prompt("Numero 2");

var resultado = prompt("ingrese operacion + - * /")

if(resultado === "+"){
    resultado = numero1 + numero2;
    alert("Resultado de tu suma"+ " " + resultado);

}else if (resultado === "*"){
    resultado = numero1*numero2;
    alert("Resultado de tu Multiplicacion"+ " " + resultado);

} else if(resultado === "/"){
    resultado = numero1/numero2;
    alert("Resultado de tu Division"+ " " + resultado)

}else if (resultado === "-"){
    resultado = numero1 - numero2;
    alert("Resultado de tu resta"+ " " + resultado)
}
}

//Funcion inventada para calcular dias de vacaciones

function calcularDias(){

    let apellido=  prompt("Por favor ingrese su apellido");
    let nombre = prompt("Por favor ingrese su nombre");
    let dias_vacaciones = prompt ("Por favor ingrese dias que necesita");
    let años_trabajados = prompt ("Ingrese años en la actividad");
    let trabajar = diferencia(años_trabajados,2);
    let licencia = diferencia(años_trabajados,dias_licencia);
   
    alert("hola" + " " + nombre + " " + apellido);

    if(años_trabajados <= 10){

        alert(trabajar + " " + "dias");
        return true;
    }

    let dias_licencia = años_trabajados / dias_vacaciones + 10;
    alert("te corresponden" + " " +  dias_licencia + " " + "dias");
       
}

function diferencia(a,b){
    return a/b;
}