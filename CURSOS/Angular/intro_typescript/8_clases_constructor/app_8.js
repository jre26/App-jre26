var Avenger = /** @class */ (function () {
    function Avenger(nombre, poder, nombreReral) {
        this.nombre = "hormiga";
        this.poder = undefined;
        this.nombreReal = undefined;
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.poder = poder;
        this.nombreReal = nombreReral;
    }
    return Avenger;
}());
var antman = new Avenger("antman", "reducion", "scott lang");
console.log(antman);
