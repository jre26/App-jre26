// Destructuracion de objetos

let avengers = {
    nombre: "Steven",
    clave: "Capita America",
    poder: "Droga"
}

let {nombre:alias, clave, poder} = avengers;

// let nombre = avengers.nombre;
// let clave = avengers.clave;
// let poder = avengers.poder;

console.log(alias, clave, poder);

// Destructuracion de arreglos

let avengers2:string[] = ["thor", "capi", "tony stark"];

let [martillo, america, ironman ] = avengers2;

console.log(martillo, ironman, america);