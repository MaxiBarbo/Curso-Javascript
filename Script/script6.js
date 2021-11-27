//  Funcion pensada para tomar datos solicitados al usuario, guardar los mismos en un array, para luego poder realizar reservas en el Bar

//  Aplicando funcion constructor en personas
class Persona {
    constructor(user,nombre,apellido,edad,contacto){
    this.user = user;    
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.contacto = contacto; 
    }

    informacion(){

        return this.nombre + " " + this.apellido +  " "  + this.edad + " " + this.contacto;
    }     
} 

// Funcion iniciar Formulario para ingresar datos solicitados

    function iniciar() {

        let preguntar = confirm("Ingrese su usuario")

        if (preguntar){
        
            let usuario = prompt("ingrese Usuario")

            // variable para consultar si existe el usuario
            let user = buscar_user(usuario); 

            if (user !==false){

                alert("Gracias por resgistrarte" + usuario.informacion());
            }                     
            else {

            alert("Usuario no encontrado");    
        }       
    } 
    else {
        let preguntar = confirm("Desea Registrarse ?") 

            if (preguntar){

                solicitar_datos();
            }
        }
    }
//  Funcion para solicitar datos al usuario 

    function solicitar_datos(){
        let user = prompt("ingrese su usuario")
        let nombre = prompt("Ingrese su nombre");
        let apellido = prompt("Ingrese su apellido");
        let edad = parseInt(prompt("Ingrese su edad"));
        let contacto = prompt("Ingrese un numero telefonico para contactar");

        // En esta variable se comprueba la info ingresada si es correctaq
        let buscar_user = confirmar_datos(user,nombre,apellido,edad,contacto);
            if (buscar_user === ""){

                //En esta variable local guardamos el usuario nuevo
                let nuevo_user = new Persona(user,nombre,apellido,edad,contacto);
                    guardar_user(nuevo_user);  
        }        
    }  
   

    function guardar_user(nuevo_user){

        let dato = localStorage.getItem("listaUser")
            if (dato){

                let dato_guardado = JSON.parse(localStorage.getItem("listaUser"));
                    dato_guardado.push(nuevo_user);
                
                let dato_string = JSON.stringify(dato_guardado);
                    localStorage.setItem("listaUser", dato_string);    
        }

            else {

                let dato_guardado = new Array();
                    dato_guardado.push(nuevo_user)
                
                let dato_string = JSON.stringify(dato_guardado);
                    localStorage.setItem("listaUser",dato_string);    
        }
    }

    function confirmar_datos(user,nombre,apellido,edad,contacto){

        let check = "";
        
        if ( (user) && (nombre) && (apellido) && (edad) && (contacto)){

            if (isNaN(parseInt(edad))){

                check = "ya existe este user"
        }
    }
        else {

            check = "Favor de ingresar todos los datos"
        }
            return check;
    }
    
    function buscar_user(userData){
        
        if (!localStorage.getItem("listaUser")){

            return false;
        }

        let dato_guardado = JSON.parse(localStorage.getItem("listaUser"));
        let nuevodato = false;
        let i = 0;

        dato_guardado.map(i => console.log(i.user))

        let nuevodato =  dato_guardado.find(i => { return i.user == userData})

            console.log(nuevodato)

    }

// Array para almacenar datos ingresados por usuario (Nombre ,Apellido, Edad, Contacto)
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
   
      
// Declarando array de prueba solicitar
   