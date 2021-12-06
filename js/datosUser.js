//  Funcion pensada para tomar datos solicitados al usuario, guardar los mismos en un array, para luego poder realizar reservas en el Bar


let persona1 = new Persona ("max86","maxi","barbo",30,153222333,"https://source.unsplash.com/pWkk7iiCoDM/400x300");
let persona2 = new Persona ("camu19","cami","barbo",30,153287653,"https://source.unsplash.com/aob0ukAYfuI/400x300");
let persona3 = new Persona ("nan50","nanci","barbo",30,153987654,"https://source.unsplash.com/EUfxH-pze7s/400x300");
let persona4 = new Persona ("ernest70","ernest","barbo",30,153198746,"https://source.unsplash.com/M185_qYH8vg/400x300");


let array_nombres = new Array();

array_nombres.push(persona1);
array_nombres.push(persona2);
array_nombres.push(persona3);
array_nombres.push(persona4);

//Caja donde se creara la nueva informacion plasmada en array

let cajaNombres = document.getElementById("cajaNombres");

for (let i = 0; i < array_nombres.length; i++) {

    let contenedor = array_nombres[i];
    crear_contenedor(contenedor);
    
}

function crear_contenedor(usuarios){

// Se crea div para contener info Personas
    let div = document.createElement("div");

// Se crea titulo para div contenedor info 
    let h2 = document.createElement("h2");
    h2.textContent = usuarios.info_usuario();

// Se crea imagen por usuario    
    let img = document.createElement("img");
    img.setAttribute("src", usuarios.image);

// se agregans los appenchild en div para meterlos dentro de div
    div.appendChild(h2);
    div.appendChild(img);


    div.addEventListener("mouseover",()=>{

        div.style.backgroundColor = "red";
    });

    div.addEventListener("mouseout",()=>{

        div.style.backgroundColor = "grey"
    });
// Se crea appenchild en caja nombres para meterlos dentro del div craado para img y h2
    cajaNombres.appendChild(div)
}
 
















