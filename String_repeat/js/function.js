function repeatStr(n, s) {
    var res = "";
    for (let i = 0; i < n; i++) {
        res += s;
    }
    return res;
}

/*
// ********** OPCIÓN 1 **********
function repeatStr (n, s) {
    return s.repeat(n);
}

// ********** OPCIÓN 2 **********
const repeatStr = (n,s) => s.repeat(n);

// ********** OPCIÓN 3 **********
function repeatStr (n, s) {
    return n > 1 ? s + repeatStr(--n, s) : s;
}

// ********** OPCIÓN 4 **********
function repeatStr (n, s) {
    String.prototype.repeat = function(n) {
        return (new Array(n + 1)).join(this);
    };
    return s.repeat(n);
}

// ********** OPCIÓN 5 **********
function repeatStr (n, s) {
    var myString = '';
    while(n > 0) {
        myString += s;
        n--;
    }
    return myString;
}

*/
