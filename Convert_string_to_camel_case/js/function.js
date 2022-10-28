function toCamelCase(str) {
    for (var res = "", i = 0; i < str.length; i++){
        if ((str[i] == "-") || (str[i] == "_")){
            i++;
            res += str[i].toUpperCase();
        }
        else res += str[i];
    }
return res;
}

/*
// ********** OPCIÓN 1 **********
function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
    });
}

// ********** OPCIÓN 2 **********
function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

// ********** OPCIÓN 3 **********
function toCamelCase(str){
    return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
}

// ********** OPCIÓN 4 **********
function toCamelCase(str) {
    return str.replace(/[_-][A-Za-z]/g, function(match) {return match[1].toUpperCase();});
}

// ********** OPCIÓN 5 **********
function toCamelCase(str){
    str = str.split(/[-_]/); // separamos donde haya un guión
    for(var i = 1; i < str.length; i++){
        // concatena el primer carácter en mayúsculas con el resto de la cadena
        str[i] = str[i].charAt(0).toUpperCase().concat(str[i].slice(1));
    }
    // devuelve la cadena unida
    return str.join("");
}

*/