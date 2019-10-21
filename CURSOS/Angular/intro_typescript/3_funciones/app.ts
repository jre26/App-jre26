function activar(quien:string, objeto:string = "bati señal2", momento?:string){
    let mensaje:string;
    
    if (momento) {
        mensaje = ` ${quien} activo la ${objeto} en el ${momento}`;
    }else{
        mensaje = ` ${quien} activo la ${objeto}`;    
    }

        

    console.log(mensaje);

}

activar("Jorge", "bati", "palo")