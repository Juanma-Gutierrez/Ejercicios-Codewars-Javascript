function solution(number) {
    var ret = 0;
    if (number < 0) return 0;
    for (let i = 0; i < number; i++){
        if ((i % 3 === 0) || (i % 5 === 0)) ret += i;
    }
    return ret;
}

/*
// ********** OPCIÓN 1 **********
function solution(number){
    var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
    return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
}

// ********** OPCIÓN 2 **********
solution = n => n <= 0 ? 0 : Array.from({length: n}, (_,i) => (i%3 == 0 ||i%5 == 0) ? i : 0).reduce((x,y) => x + y)

// ********** OPCIÓN 3 **********
// Doble if ternario
solution = n => {
    let s = 0;
    for (let i = 0; i < n; i++) s += i % 3 ? i % 5 ? 0 : i : i;
    return s;
}

// ********** OPCIÓN 4 **********
function solution(number){
    var sum = 0;
    while (number > 0){
        number--;
        sum += (!(number%3)) ? number : (!(number%5)) ? number : 0;
    }
    return sum;
}

// ********** OPCIÓN 5 **********
const solution = number => {
    let summ = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) summ += i
    }
    return summ
}

*/