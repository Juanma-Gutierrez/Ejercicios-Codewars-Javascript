const boolToWord = (bool) => (bool ? "Yes" : "No");

/*
// ********** OPCIÓN 1 **********
function boolToWord( bool ){
    return bool ? 'Yes':'No';
}

// ********** OPCIÓN 2 **********
function boolToWord( bool ){
    if (bool) {
        return 'Yes';
    } else {
        return 'No';
    }
}

// ********** OPCIÓN 3 **********
var boolToWord = function boolToWord() {
    //compile
    var result = compile(Array.prototype.slice.call(arguments, 0)[0])
    //finish
    return result;
};

function compile(input) {
    var iterator = 0,
        input    = input.toString(),
        output   = [];
    for( ; iterator < input.length; iterator++) {
        output[iterator] = input[iterator];
    }
    switch (output.join('')) {
    case 'true':
        return 'Yes';
        break;
    case 'false':
        return 'No';
        break;
    case 'maybe':
        return 'Maybe';
        break;
    default: 
        throw new Error('Input was not recognized');
    }
}

// ********** OPCIÓN 4 **********
function boolToWord(bool) {
    if(bool === true){
        return "Yes"
    }
    else{
        return "No"
    }
}

boolToWord(false)

// ********** OPCIÓN 5 **********
function boolToWord( bool ){
    if( bool ){
        return "Yes";
    }
    return "No";
}

*/
