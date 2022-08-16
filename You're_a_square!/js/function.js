function isSquare(n) {
    var i = 0;
    while (i <= n && n >= 0){
        if (i * i == n) return true;
        i++;
    }
    return false;
}

/*
// ********** OPCIÓN 1 **********
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

// ********** OPCIÓN 2 **********
const isSquare = n => Number.isInteger(Math.sqrt(n));

// ********** OPCIÓN 3 **********
var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
}

// ********** OPCIÓN 4 **********
// n % 1 nos da los decimales de n. Al haber sacado previamente sqrt, hemos hecho la raíz de n. Si la raiz(n) % 1 === 0 => no hay decimales, luego es raíz entera
const isSquare = n => Math.sqrt(n) % 1 === 0

*/
