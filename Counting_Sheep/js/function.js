function countSheeps(arrayOfSheep) {
    var numSheeps = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] == true) numSheeps++;
    }
    return numSheeps;
}

/*
// ********** OPCIÓN 1 **********
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

// ********** OPCIÓN 2 **********
const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(s => s).length;

// ********** OPCIÓN 3 **********
function countSheeps(arr) {
    return arr.filter(Boolean).length;
}

// ********** OPCIÓN 4 **********
function countSheeps(arrayOfSheep) {
    var count = 0;
    arrayOfSheep.forEach( function (sheep) {
        if (sheep)
        count++;
    });
    return count;
}

// ********** OPCIÓN 5 **********
let countSheeps = x => x.filter( s => s ).length;

*/
