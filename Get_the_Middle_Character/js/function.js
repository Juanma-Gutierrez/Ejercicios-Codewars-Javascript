function getMiddle(s) {
    var middle = s.length / 2;
    return s.length % 2 == 0
        ? s.substring(Math.floor(middle - 1), Math.floor(middle + 1))
        : s.substring(middle, middle + 1);
}

/*
// ********** OPCIÓN 1 **********
function getMiddle(s)
{
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// ********** OPCIÓN 2 **********
function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2)
        ? s.charAt(Math.floor(middle))
        : s.slice(middle - 1, middle + 1);
}

// ********** OPCIÓN 3 **********
function getMiddle(s)
{
    return s.slice((s.length-1)/2, s.length/2+1);
}

// ********** OPCIÓN 4 **********
function getMiddle(s)
{
    let middle = Math.floor(s.length/2);
    return s.length % 2 === 0
        ? s.slice(middle-1, middle+1)
        : s.slice(middle, middle+1);
}

// ********** OPCIÓN 5 **********
function getMiddle(string) {
    var middleIndex = string.length / 2;
    if (string.length % 2 == 0) {
        return string.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return string.charAt(middleIndex);
    }
}

*/
