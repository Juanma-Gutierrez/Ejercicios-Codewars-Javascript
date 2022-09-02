function opposite(number) {
    return number * -1;
}

/*
// ********** OPCIÓN 1 **********
function opposite(number) {
    return(-number);
}

// ********** OPCIÓN 2 **********
const opposite = number => -number;

// ********** OPCIÓN 3 **********
function opposite(number) {
    if (number === 0) {
        return 0;
    } else if (number.toString().includes('.') && number > 0) {
        return parseFloat("-" + number, 10);
    } else if (number > 0) {
        return parseInt("-" + number, 10);
    } else if (number < 0 && number.toString().includes('.')) {
        var didget = number.toString().split('-').pop();
        return parseFloat(didget);
    } else {
        var didgets = number.toString().split('-').pop();
        return parseInt(didgets);
    }
}

// ********** OPCIÓN 4 **********
function opposite(number) {
    return number > 0 ? -number : Math.abs(number);
}

// ********** OPCIÓN 5 **********
function opposite(n) {return -n}

*/