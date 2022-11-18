function longestConsec(strarr, k) {
    // comprobar si el array es de 0 elementos o menor que k o k <= 0
    var arrayLength = strarr.length;
    if (arrayLength == 0 || arrayLength < k || k <= 0) return "";

    var ret = "";
    var newStr = "";
    for (let i = 0; i < arrayLength; i++) {
        newStr = strarr.slice(i, i + k);
        if (newStr.join("").length > ret.length) {
            ret = newStr.join("");
        }
    }
    return ret;
}

/*
// ********** OPCIÓN 1 **********
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
        var tempArray = strarr.slice(i,i+k);
        var tempStr = tempArray.join("");
        if(tempStr.length > longest.length){
            longest = tempStr;
        }
    }
    return longest;
}

// ********** OPCIÓN 2 **********
function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) {
        return "";
    }
    return strarr.reduce((long, item, i) => {
        const currString = strarr.slice(i, i + k).join("");
        return currString.length > long.length ? currString : long;
    }, "");
}

// ********** OPCIÓN 3 **********
function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) {
        return "";
    }
    return strarr
        .map((value, index) => strarr.slice(index, index + k).join(""))
        .reduce((longest, current) =>
            current.length > longest.length ? current : longest
        );
}

// ********** OPCIÓN 4 **********
function longestConsec(strarr, k) {
    if( strarr.length==0 || k> strarr.length || k <1 ) return "";
    let lens = strarr.map( (_,i,arr) => arr.slice(i,i+k).join('').length ),
    i = lens.indexOf( Math.max(...lens) );
    return strarr.slice(i,i+k).join('')
}

// ********** OPCIÓN 5 **********
function longestConsec(strarr, k) {
    var n = strarr.length;
    if ((n === 0) || (k > n) || (k <= 0)) return "";
    var arr = strarr.map(function(u) { return u.length; });
    var sm = 0;
    for (var i = 0; i < k; i++) sm += arr[i];
    var mx_sm = sm, mx_nd = k - 1;
    for (var u = k; u < n; u++) {
        sm = sm + arr[u] - arr[u - k];
        if (sm > mx_sm) {
            mx_sm = sm; mx_nd = u;
        }
    }
    var start =  mx_nd - k + 1;
    return strarr.slice(start, mx_nd+1).join("");
}
*/

