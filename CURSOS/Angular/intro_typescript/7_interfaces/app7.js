function enviarMision(xmen) {
    console.log("Enviando a mision a ", xmen.nombre);
}
;
function enviarCuartel(xmen) {
    console.log("Enviando a cuartel a ", xmen.nombre);
}
;
var xmen = {
    nombre: "wolverin",
    poder: "regeneración"
};
enviarMision(xmen);
enviarCuartel(xmen);
