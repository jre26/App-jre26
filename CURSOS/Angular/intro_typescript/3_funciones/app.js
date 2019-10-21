function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "bati señal2"; }
    var mensaje;
    if (momento) {
        mensaje = " " + quien + " activo la " + objeto + " en el " + momento;
    }
    else {
        mensaje = " " + quien + " activo la " + objeto;
    }
    console.log(mensaje);
}
activar("Jorge", "bati", "palo");
