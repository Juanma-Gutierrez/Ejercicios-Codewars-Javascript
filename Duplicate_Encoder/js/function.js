function duplicateEncode(word) {
    let ret = "";
    const charMap = {};
    // recorrer la string guardando la cuenta de las repeticiones de los caracteres
    Array.from(word).forEach(char =>{
        char = char.toLowerCase();
        if (!charMap[char]){
            charMap[char] = {
                count: 1,
            }
        } else {
            charMap[char].count++;
        }
    });

    // si se repite, poner (
    for (let i = 0; i < word.length; i++){
        let char = word[i].toLowerCase();
        ret += charMap[char].count > 1 ? ")" : "(";
    };

    // retornar resultado
    console.log('Salida:',ret);
    return ret;
}

/*
// ********** OPCIÓN 1 **********
function duplicateEncode(word){
    return word
        .toLowerCase()
        .split('')
        .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
    .join('');
}

// ********** OPCIÓN 2 **********
function duplicateEncode(word){
    var unique='';
    word = word.toLowerCase();
    for(var i = 0; i < word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;
}

// ********** OPCIÓN 3 **********
function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

// ********** OPCIÓN 4 **********
const duplicateEncode = s => s
    .toLowerCase()
    .split``
    .map((e, _, a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')')
    .join``;

// ********** OPCIÓN 5 **********
function duplicateEncode(string){
    var occurances = string.toLowerCase().split('').reduce(function(occ, cha){
    occ[cha] = (occ[cha] || 0) + 1;
    return occ;
    }, {});
    return string.toLowerCase().replace(/[\S\s]/g, function(cha){
    return occurances[cha] > 1 ? ')' : '(';
    });
}

*/
