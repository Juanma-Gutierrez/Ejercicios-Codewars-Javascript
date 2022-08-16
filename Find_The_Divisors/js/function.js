function divisors(integer) {
    var array = [];
    for (let i = 2; i < integer; i++){
        if (integer % i === 0) array.push(i);
    }
    return (array.length > 0) ? array : integer + " is prime";
}

/*
// ********** OPCIÓN 1 **********
// Declaración de dos variables en el FOR
function divisors(integer) {
    for(var div = [], i = 2; i < integer; i++) if(integer % i == 0) div.push(i);
    return div.length > 0 ? div : integer + " is prime";
}

// ********** OPCIÓN 2 **********
function divisors(integer) {
    for (var res = [], i = 2; i < integer - 1; i++) {
        if (integer % i == 0) res.push(i)
    }
    return res.length ? res : integer + ' is prime'
}
// ********** OPCIÓN 3 **********

// ********** OPCIÓN 4 **********

// ********** OPCIÓN 5 **********

// ********** OPCIÓN 6 **********

// ********** OPCIÓN 7 **********


*/