// Funcion elegir ciudad utilizando la declaracion Switch
function ciudad() {
   
    let city =  prompt("Eligue entre 1 - 2 - 3 - 4").toLowerCase();
    
    while (city != 'salir') {

        if(city !== "1" && city !== "2" && city !=="3" && city !== "4"){
            alert("no se reconoce numero");
            
        }
        switch (city) {
            case "1":
                alert("Rosario");
                break;
            case "2":
                alert("Funes");
                break;
            case "3":
                alert("Funes Town");
                break;
            case "4":
                alert("Fisherton");
                break;
               
        }
        
        city = prompt("eligue un numero de 1 a 4").toLowerCase();
    }
}

//Funcion para agregar personas a un array mediante ingreso de sus datos

function incrementar(){

// Array creado para darle distintos usos a los datos
    
let array_nombres = ["maxi","pumi","iri","nanci","ernesto","luli","vane"];
let array_edad = [34,22,19,1,70,60];
let sumar_array = array_nombres.concat(array_edad) // Probando concatenar distintos arrays

for (let i = 0; i < 10; i++) { 
  
  let resultado1 =  sumar_array[i];

    if (resultado1 < 18){ // se busca edades menores a 18 dentro de los array recorriendo con un for
        console.log(resultado1)

    }
  }
}

// // Linea de codigo generada para que el usuario ingrese sus datos y luego se guarde en "array_nombres"
// let ingreso_nombre = array_nombres.push(prompt("Ingrese su nombre"));     
// //For declarado para buscar lo que necesite dentro de array_nombre
// let acumulador = prompt("Ingrese su nombre")
// let acumulador_edad = prompt ("ingrese su apellido")
// let acumulador_apellido = prompt("ingrese su edad")
     

        


    
    
    
    
