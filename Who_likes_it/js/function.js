function likes(names) {
    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return names[0] + " likes this";
        case 2:
            return names[0] + " and " + names[1] + " like this";
        case 3:
            return (
                names[0] + ", " + names[1] + " and " + names[2] + " like this"
            );
    }
    return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2).toString() +
        " others like this"
    );
}

/*
// ********** OPCIÓN 1 **********
function likes(names) {
    names = names || [];
    switch(names.length){
        case 0: return 'no one likes this'; break;
        case 1: return names[0] + ' likes this'; break;
        case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
        default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}

// ********** OPCIÓN 2 **********
function likes (names) {
    var templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length, 4);
    return templates[idx].replace(/{name}|{n}/g, function (val) {
        return val === '{name}' ? names.shift() : names.length;
    });
}

// ********** OPCIÓN 3 **********
function likes(names) {
    if(names.length === 0) return "no one likes this";
    if(names.length === 1) return names[0] + " likes this";
    if(names.length === 2) return names[0] + " and " + names[1] + " like this";
    if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}

// ********** OPCIÓN 4 **********
function likes(names) {
    switch(names.length){
        case 0:
            return "no one likes this";
        case 1:
            return names[0] + " likes this";
        case 2:
            return names[0] + " and " + names[1] + " like this";
        case 3:
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        default:
            return names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this";
    }
}

// ********** OPCIÓN 5 **********
function likes(names) {
    names.length === 0 && (names = ["no one"]);
    let [a, b, c, ...others] = names;
    switch (names.length) {
        case 1: return `${a} likes this`;
        case 2: return `${a} and ${b} like this`;
        case 3: return `${a}, ${b} and ${c} like this`;
        default: return `${a}, ${b} and ${others.length + 1} others like this`;
    }
}

*/
