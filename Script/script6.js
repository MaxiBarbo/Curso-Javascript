//  Funcion pensada para tomar datos solicitados al usuario, guardar los mismos en un array, para luego poder realizar reservas en el Bar

//  Aplicando funcion constructor en personas
class Persona {
    constructor(nombre,apellido,edad,contacto){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.contacto = contacto; 
    }

    informacion(){

        return this.nombre + " " + this.apellido +  " "  + this.edad + " " + this.contacto;
    }     
} 

// Array para almacenar datos ingresados por usuario
    const array_nombres = [];
    array_nombres.push(new Persona("juan","perez",23,155368748));
    array_nombres.push(new Persona("mario","cocu",18,165478934));
    array_nombres.push(new Persona("carlos","melo",69,153202369));
    array_nombres.push(new Persona("mariano", "toca",10,164878965));
    array_nombres.push(new Persona("rodrigo", "peloncho",14,15698742));
    array_nombres.push(new Persona("peringon", "caranepe",34,153779966));

    for (const Persona of array_nombres){
        Persona.informacion();
}      

//  Funcion para solicitar datos al usuario  
    function solicitar_datos(){

        let nombre = prompt("Ingrese su nombre");
        let apellido = prompt("Ingrese su apellido");
        let edad = parseInt(prompt("Ingrese su edad"));
        let contacto = prompt("Ingrese un numero telefonico para contactar");
    
    if (nombre !== " " && apellido !== " " && edad !== " "  && contacto !== " "){

        let array_nombres = new Persona(nombre,apellido,edad,contacto);
        array_nombres.push(array_nombres);  

    }
}

// Funcion iniciar Formulario para ingresar datos solicitados
    function iniciar() {

        let preguntar = confirm("Desea registrarse?")

        if (preguntar){

            solicitar_datos();                            
    } 
        else {

            alert("Desea iniciar nuevamente?");
    }        
}


   