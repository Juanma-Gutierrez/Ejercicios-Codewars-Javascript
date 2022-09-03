function alphabetPosition(text) {
    var newStr = cleanString(text);
    var res = "";
    for (let i = 0; i < newStr.length; i++) {
        i < newStr.length - 1 ? (res += newStr.charCodeAt(i) - 96 + " ") : (res += newStr.charCodeAt(i) - 96);
    }
    return res;
}

function cleanString(str) {
    var newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() >= "a" && str[i].toLowerCase() <= "z")
            newStr += str[i].toLowerCase();
    }
    return newStr;
}
/*
// ********** OPCIÓN 1 **********
function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map( (c) => c.charCodeAt() - 64)
        .join(' ');
}

// ********** OPCIÓN 2 **********
function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
        var code = text.toUpperCase().charCodeAt(i)
        if (code > 64 && code < 91) result += (code - 64) + " ";
    }
    return result.slice(0, result.length-1);
}

// ********** OPCIÓN 3 **********
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

// ********** OPCIÓN 4 **********
function alphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text.toLowerCase().split('')
    .filter( letter => {
        let index = alphabet.indexOf(letter);
        return index > -1;
    }  )
    .map( letter => alphabet.indexOf(letter) + 1 )
    .join(' ')
}

// ********** OPCIÓN 5 **********
function alphabetPosition(text) {
    return text.match(/[a-zA-Z]/g).map( (el) => el.toLowerCase().charCodeAt() - 96 ).join(' ');
}

*/
