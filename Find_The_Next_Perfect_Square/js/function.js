function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 === 0){
        while (Math.sqrt(++sq) % 1 !== 0);
        return sq;
    }
    else return -1;
}

/*
// ********** OPCIÓN 1 **********
function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

// ********** OPCIÓN 2 **********
function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}

// ********** OPCIÓN 3 **********
function findNextSquare(sq) {
    let r = Math.sqrt(sq)
    return r % 1 ? -1 : ++r * r
}

// ********** OPCIÓN 4 **********
function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq);
    return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}

*/