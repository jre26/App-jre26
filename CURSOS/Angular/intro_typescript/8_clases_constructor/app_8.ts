
class Avenger {
    nombre:string = "hormiga";
    poder:string = undefined;
    nombreReal:string= undefined;

    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor(nombre:string, poder:string, nombreReral:string){
        this.nombre = nombre;
        this.poder = poder;
        this.nombreReal = nombreReral;
    }
}

let antman:Avenger = new Avenger("antman", "reducion", "scott lang");

console.log(antman);