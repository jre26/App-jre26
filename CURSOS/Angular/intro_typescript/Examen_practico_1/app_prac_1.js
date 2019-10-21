// 1
var nombre_p = "Jorge Reina";
var edad_p = 23;
var PERSONJE = {
    nombre_p: nombre_p,
    edad_p: edad_p
};
function detallesPersonaje(nombre, artesMarciales) {
    console.log("Nombre: " + nombre + " artes marciales que practica: " + artesMarciales);
}
var batmanX = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
//3
var resultadoD = function (a, b) { return (a + b) * 2; };
// 4
function getAvenger2(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        console.log(nombre + " tiene el poder de: " + poder + " y un arma: " + arma);
    }
    else {
        console.log(nombre + " tiene un " + poder);
    }
}
getAvenger2("Batman", "garra");
// 5
var rectangulo = /** @class */ (function () {
    function rectangulo() {
    }
    rectangulo.prototype.calcucularArea = function () {
        return this.base * this.altura;
    };
    return rectangulo;
}());
var constante = "Este dato no puede cambiar.";
