//  Funcion pensada para tomar datos solicitados al usuario, guardar los mismos, para luego poder realizar pedidos en nuetra web

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
// Funcion para iniciar Formulario para ingresar datos solicitados
    function iniciar() {

        let preguntar = confirm("Desea registrarse?")

        if (preguntar){

            buscar();
             
                    
    } 
        else {

            alert("Muchas gracias! Nos vemos en la proxima :)")
    }  
}        
// Array para almacenar datos ingresados

    function buscar(){

        const array_nombres = [];
        array_nombres.push(new Persona("juan","perez",23,155368748));
        array_nombres.push(new Persona("mario","cocu",18,165478934));
        array_nombres.push(new Persona("carlos","melo",69,153202369));
        array_nombres.push(new Persona("mariano", "toca",10,164878965));
        array_nombres.push(new Persona("rodrigo", "peloncho",14,15698742));
        array_nombres.push(new Persona("peringon", "caranepe",34,153779966));

        
        for (let i = 0; i < array_nombres.length; i++) {

            if(array_nombres[i] === nombre){
                alert(array_nombres.informacion());  
                
   }
       
 }       
}      

   