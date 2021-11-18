
//Aplicando funcion constructor en personas

function persona(nombre,apellido,edad){

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

// para agregar una nueva persona al constructor de utiliza "new persona"

let persona1 = new persona ("maxi"," barbo", 34);
let persona2 = new persona ("irina","barbo?",1);