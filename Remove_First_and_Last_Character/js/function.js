const removeChar = (str) => str.substring(1, str.length - 1);

/*
// ********** OPCIÓN 1 **********
function removeChar(str) {
    return str.slice(1, -1);
}

// ********** OPCIÓN 2 **********
const removeChar = str => str.slice(1,-1)

// ********** OPCIÓN 3 **********
function removeChar(str){
    return str.substring(1, str.length-1);
};

// ********** OPCIÓN 4 **********
function removeChar(str){
    str1 = str.split('');
    str1.shift();
    str1.pop();
    return str1.join('');
};

// ********** OPCIÓN 5 **********
removeChar = str => str.slice(1,-1)

*/
