// Destructuracion de objetos
var avengers = {
    nombre: "Steven",
    clave: "Capita America",
    poder: "Droga"
};
var alias = avengers.nombre, clave = avengers.clave, poder = avengers.poder;
// let nombre = avengers.nombre;
// let clave = avengers.clave;
// let poder = avengers.poder;
console.log(alias, clave, poder);
// Destructuracion de arreglos
var avengers2 = ["thor", "capi", "tony stark"];
var martillo = avengers2[0], america = avengers2[1], ironman = avengers2[2];
console.log(martillo, ironman, america);
