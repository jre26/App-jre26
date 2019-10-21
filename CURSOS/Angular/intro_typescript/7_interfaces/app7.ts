interface Xmen{
    nombre:string,
    poder:string
}


function enviarMision(xmen:Xmen){
    console.log("Enviando a mision a ", xmen.nombre )
};
function enviarCuartel(xmen:Xmen){
    console.log("Enviando a cuartel a ", xmen.nombre )
};

let xmen = {
    nombre: "wolverin",
    poder: "regeneración"
}

enviarMision(xmen);
enviarCuartel(xmen);