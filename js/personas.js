//  Funcion pensada para tomar datos solicitados al usuario, guardar los mismos en un array, para luego poder realizar reservas en el Bar

//  Aplicando funcion constructor en personas
class Persona{
    constructor(user,nombre,apellido,edad,email,image){
    this.user = user;    
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email; 
    this.image = image;
    }

    info_usuario(){

        return this.user + " " + this.edad;
    }     
}