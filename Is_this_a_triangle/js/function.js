function isTriangle(a,b,c){
    return ((a + b > c) && (a + c > b) && (b + c > a)) ? true : false;
}

/*
// ********** OPCIÓN 1 **********
function isTriangle(a,b,c)
{
    return a + b > c && a + c > b && c + b > a;
}

// ********** OPCIÓN 2 **********
var isTriangle = (a,b,c) => Math.max(a,b,c) < (a+b+c) / 2

// ********** OPCIÓN 3 **********
function isTriangle(a,b,c)
{
    [a, b, c] = [a, b, c].sort((x, y) => x - y);
    return a+b > c;
}

// ********** OPCIÓN 4 **********
function isTriangle(a,b,c) {
    var sides = [a, b, c].sort();
    return (sides[0] + sides[1] > sides[2]);
}

// ********** OPCIÓN 5 **********
const isTriangle = (a$,b$,c$) => a$ + b$ > c$ && a$ + c$ > b$ && b$ + c$ > a$;

*/