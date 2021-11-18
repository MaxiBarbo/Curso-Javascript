
function ciudad() {
   
    let city =  prompt("Ingrese Ciudad").toLocaleLowerCase();
    
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
        
        city = prompt("eligue un numero de 1 a 4").toLocaleLowerCase();
    }
}

function incrementar(){


let acumulador = prompt("Ingrese numero por el que desea comenzar")
let multi = prompt ("ingrese multiplo que desea ver")
let cantidad = prompt("ingrese cantidad de veces a repetir")

for (let i = 0; i < cantidad ; i++) {
    
    resultado = acumulador++ * multi;
    alert(resultado);
    
    }
}