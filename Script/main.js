
// Mismo color todas las etiquetas "p"

let titulos = document.getElementById("tituloH1"); 

for (let i = 0; i < titulos.length; i++) {

titulos[i].style.color = "#BFD7EA";
       
}
// jugando con las propiedades en etiquetas H1
function changeText() {
    let cambiar = document.getElementById("tituloH1");  

    let iniciar = confirm("Cambiar Propiedades al Texto?");

     if(iniciar){
        let consulta = prompt("que desea cambiar? Color - Tamaño - Estilo ")

            if(consulta == "color"){

                let cual = prompt("rojo - verde - azul - gris ")       
                
                switch (cual) {
                    case "rojo":
                        cambiar.style.color = "red";
                        break;
                    case "verde":
                        cambiar.style.color = "green";
                        break;
                    case "azul":
                        cambiar.style.color = "blue";
                        break;
                    case "gris":
                        cambiar.style.color = "grey";
                        break;       
                }  
            }
            else if (consulta == "tamaño"){
                cambiar.style.fontSize = "4rem";    
            }
            else if (consulta === "estilo"){
                cambiar.style.fontFamily = "Ubuntu Mono"
            } 
            else {
                return
            } 
    }
    else {

    }
}

// Variable para cambiar tipo de letra en los label 
let label_index = document.getElementsByTagName("label");

for (let i = 0; i < label_index.length; i++) {

    label_index[i].style.fontFamily = "Ubuntu Mono";
    
}
// Variable para cambiar tamaño de los inputs
let input_index = document.getElementsByTagName("input");

for (let i = 0; i < input_index.length; i++) {

    input_index[i].style.width = "20rem";   
}

// Variable para cambiar color a los links del Nav
let colorNav = document.getElementsByClassName("nav-link");

for (let i = 0; i < colorNav.length; i++) {

    colorNav[i].style.color = "#FFD23F";   
}

//Variable para cambiar color de los titulos H2 
let parrafo = document.createElement("h2");
parrafo.innerHTML = "Mi primer parrafo H2 con Javascript";
parrafo.style.color = "grey";
document.body.appendChild(parrafo);



