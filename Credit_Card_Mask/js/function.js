function maskify(cc) {
    var my_array = cc.target.param;
    my_array.forEach((element) => {
        var lon = element.length;
        var i = 0;
        while (i < lon - 4) {
            element = element.replaceAt(i, "#");
            i++;
        }
    });
    return my_array;
}

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
}
/*
// ********** OPCIÓN 1 **********
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// ********** OPCIÓN 2 **********
function maskify(cc) {
    return cc.replace(/.(?=.{4})/g, "#");
}

// ********** OPCIÓN 3 **********
function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
        cc[i] = "#";
    }
    cc = cc.join("");
    return cc
}
*/