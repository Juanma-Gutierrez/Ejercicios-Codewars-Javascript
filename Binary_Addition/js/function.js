function addBinary(a, b) {
    let sum = "";
    let res = a + b;
    let base = "01"; // podemos usar cualquier base modificando esta cadena
    while (res > 0) {
        sum = base[res % base.length] + sum;
        res = Math.floor(res / base.length);
    }
    return sum;
}

/*
// ********** OPCIÓN 1 **********
function addBinary(a,b){
    return (a+b).toString(2)
}

// ********** OPCIÓN 2 **********
const addBinary = (a, b) => (a + b).toString(2);

// ********** OPCIÓN 3 **********
function decimalToBinary(decimal){
    return (decimal >>> 0).toString(2);
}

function addBinary(a,b) {
    return decimalToBinary(a+b);
}

// ********** OPCIÓN 4 **********
function addBinary(a,b) {
    var c = a + b;
    var res = '';
    while (c >= 1) {
        var res = c % 2 + res;
        c = Math.floor(c / 2);
    }
    return res;
}

// ********** OPCIÓN 5 **********
function addBinary(a,b){
    return Number(a + b).toString(2);
}

*/
