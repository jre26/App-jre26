
function getNombre(){
    return "Hola fernando";
}

let nombre_1:string = "jorge";
let apellido_1:string = "Reina";
let edad:number = 23;

let texto = `Hola ${ nombre_1 } ${ apellido_1 } (${ edad })`;

let texto2 = ` ${ getNombre() }`;

console.log(texto2);