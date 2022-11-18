const isValidWalk = (walk) => {
    if (walk.length != 10) return false;
    var nCount = 0;
    var sCount = 0;
    var eCount = 0;
    var wCount = 0;
    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case "n":
                nCount++;
                break;
            case "s":
                sCount++;
                break;
            case "e":
                eCount++;
                break;
            case "w":
                wCount++;
                break;
        }
    }
    return nCount != sCount || eCount != wCount ? false : true;
};

/*
// ********** OPCIÓN 1 **********
function isValidWalk(walk) {
    var dx = 0;
    var dy = 0;
    var dt = walk.length;
    for (var i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case "n":
                dy--;
                break;
            case "s":
                dy++;
                break;
            case "w":
                dx--;
                break;
            case "e":
                dx++;
                break;
        }
    }
    return dt === 10 && dx === 0 && dy === 0;
}

// ********** OPCIÓN 2 **********
function isValidWalk(walk) {
    function count(val) {
        return walk.filter(function (a) {
            return a == val;
        }).length;
    }
    return (
        walk.length == 10 &&
        count("n") == count("s") &&
        count("w") == count("e")
    );
}

// ********** OPCIÓN 3 **********
function isValidWalk(walk) {
    const north = walk.filter((item) => {
        return item === "n";
    }).length;
    const south = walk.filter((item) => {
        return item === "s";
    }).length;
    const east = walk.filter((item) => {
        return item === "e";
    }).length;
    const west = walk.filter((item) => {
        return item === "w";
    }).length;
    return walk.length === 10 && north === south && east === west;
}

// ********** OPCIÓN 4 **********
function isValidWalk(walk) {
    return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
}

// ********** OPCIÓN 5 **********
function isValidWalk(walk) {
    var res = {n:0, w:0, s:0, e:0};
    walk.forEach((c) => res[c]++);
    return walk.length === 10 && res.n == res.s && res.e == res.w;
}

*/

