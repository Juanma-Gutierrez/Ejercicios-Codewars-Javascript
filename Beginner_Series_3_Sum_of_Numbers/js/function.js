function getSum(a, b) {
    let num1;
    let num2;
    let res = 0;
    if (a > b) {
        num1 = b;
        num2 = a;
    } else {
        if (a <= b) {
            num1 = a;
            num2 = b;
        }
    }
    for (let i = num1; i <= num2; i++) {
        res += i;
    }
    return res;
}

/*
// ********** OPCIÓN 1 **********
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

// ********** OPCIÓN 2 **********
function GetSum( a,b )
{
    if (a == b) return a;
    else if (a < b) return a + GetSum(a+1, b);
    else return a + GetSum(a-1,b);
}

// ********** OPCIÓN 3 **********
function GetSum(a,b)
{
    return (Math.abs(a - b) + 1) * (a+b) / 2;
}

// ********** OPCIÓN 4 **********
function GetSum( a,b ) {
    var result = 0;
    var bigger = a > b ? a : b;
    var smaller = a > b ? b : a;
    for (var i = smaller; i <= bigger; i++) { result += i }
    return result
}

// ********** OPCIÓN 5 **********
function GetSum(a, b) {
    tmp = 0;
    if (a < b) while (a <= b) tmp += a++;
    else while (a >= b) tmp += a--;
    return tmp;
}

*/

