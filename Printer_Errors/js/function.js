function printerError(s) {
    let errors = 0;
    for (let i = 0; i < s.length; i++){
        if ((s[i] < "a") || (s[i] > "m")) errors ++;
    }
    return (errors + "/" + s.length);
}

/*
// ********** OPCIÓN 1 **********
function printerError(s) {
    var m = 0;
    for (var i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() > 109 || s[i].charCodeAt() < 97) {
        m++;
    }
    }
    return m + '/' + s.length;
}

// ********** OPCIÓN 2 **********
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

// ********** OPCIÓN 3 **********
const printerError = ($) => [ ($.match(/[n-z]/g) || []).length, $.length ].join('/')

// ********** OPCIÓN 4 **********
var printerError = s => (s.match(/[n-z]/g) || []).length + '/' + s.length;

// ********** OPCIÓN 5 **********
function printerError(s) {
    return `${s.replace(/[a-m]/ig, '').length}/${s.length}`;
}

*/