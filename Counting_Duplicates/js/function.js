function duplicateCount(text) {
    var res = {};
    for (var i in text) {
        res[text[i].toLowerCase()] = (res[text[i].toLowerCase()] || 0) + 1;
    }
    let num = 0;
    for (var i in res) {
        if (res[i] > 1) num++;
    }
    return num;
}

/*
// ********** OPCIÓN 1 **********
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

// ********** OPCIÓN 2 **********
function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
        return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

// ********** OPCIÓN 3 **********
function duplicateCount(text){
    var lower = text.toLowerCase();
    var count = 0;
    var used = [];
    lower.split('').forEach(function(letter) {
        if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
            count++;
            used.push(letter);
        }
    });
    return count;
}

// ********** OPCIÓN 4 **********
function duplicateCount(text) {
    var input = text.toLowerCase().split("");
    var obj = {};
    for (var i in input) {
        if (!obj[input[i]]) {
            obj[input[i]] = 1;
        } else {
            obj[input[i]] += 1;
        }
    }
    var result = 0;
    for (var prop in obj) {
        if (obj[prop] > 1) {
            result++;
        }
    }
    return result;
}

// ********** OPCIÓN 5 **********
function duplicateCount(text){
    var count = text.toLowerCase().split('').reduce((accum, curr) => {
        accum[curr] ? accum[curr] += 1 : accum[curr] = 1;
        return accum;
    }, {});
    return Object.keys(count).filter(key => count[key] > 1).length;
}

*/

