var num = 1;
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Proseco terminado");
        if (num == 0) {
            resolve();
        }
        else {
            reject();
        }
    }, 1500);
});
prom1.then(function () {
    console.log("Ejecutar cuando se termine bien!");
}, function () {
    console.log("Ejecutar cuando termine con un error!");
});
