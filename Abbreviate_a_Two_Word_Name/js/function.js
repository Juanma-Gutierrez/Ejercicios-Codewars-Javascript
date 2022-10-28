function abbrevName(name){
    var newStr = name.toUpperCase().split(" ");
    return (newStr.length == 2) ? newStr[0][0] + "." + newStr[1][0] : name;
}

/*
// ********** OPCIÓN 1 **********
function abbrevName(name){
    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

// ********** OPCIÓN 2 **********
function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

// ********** OPCIÓN 3 **********
function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

// ********** OPCIÓN 4 **********
const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()

// ********** OPCIÓN 5 **********
function abbrevName(name){
    return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();
}

*/