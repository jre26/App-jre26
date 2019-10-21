// 1
let nombre_p:string = "Jorge Reina";
let edad_p:number = 23;

const PERSONJE = {
    nombre_p: nombre_p,
    edad_p: edad_p
};

// 2
interface Batman  {
    nombre:string,
    artesMarciales:string[];
}

function detallesPersonaje(nombre:Batman, artesMarciales:Batman) {
    console.log("Nombre: "+ nombre+" artes marciales que practica: "+artesMarciales)
}

let batmanX:Batman = {
    nombre:"Bruno Díaz",
    artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

//3

let resultadoD = ( a:number, b:number ) => (a +b) * 2 ;

// 4

function getAvenger2(nombre:string, poder?:string, arma:string ="arco" ) {
    let mensaje:string;
    if (poder) {
        console.log(nombre + " tiene el poder de: " + poder + " y un arma: " + arma);
    }else{
        console.log( nombre + " tiene un " + poder);
    }
}

getAvenger2("Batman","garra")


// 5

class rectangulo {
    base:number;
    altura:number;
   
    calcucularArea():number{
        return this.base*this.altura;
    }
}

const constante = "Este dato no puede cambiar."



