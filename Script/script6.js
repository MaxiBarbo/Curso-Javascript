
//Aplicando funcion constructor en personas

function sumarPersona(nombre,apellido,edad){

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    
}

// para agregar una nueva persona al constructor de utiliza "new persona"

let persona1 = new persona1 ("maxi"," barbo", 34);
let persona2 = new persona2 ("irina","barbo?",1); 

// Funcion para solicitar datos al usuario por ingreso

function solicitar_datos(){
    let nombre = prompt("Ingrese el nombre");
    let apellido = prompt("Ingrese la apellido");
    let edad = parseInt(prompt("Ingrese la edad"));
    let genero = prompt("Ingrese el genero");
    

    if (nombre != '' && apellido != '' && edad != ''  && genero != '' ){

        let persona2 = new Persona2(nombre,apellido,edad,genero);
        arreglo_persona2.push(persona2);
  
    }
}
let arreglo_persona2 = new Array();

let resp;
do{
    resp = confirm("Desea cargar nueva persona");
    if (resp){

        solicitar_datos();

    }

}while(resp)


for (let i = 0 ;i<arreglo_perros.length;i++){

    alert(arreglo_perros[i].nombre);

} 




let mensaje = "";
for (let i = 0 ;i<arreglo_perros.length;i++){

    mensaje = mensaje + "\n" + (arreglo_perros[i].getInfo());

} 


alert(mensaje);