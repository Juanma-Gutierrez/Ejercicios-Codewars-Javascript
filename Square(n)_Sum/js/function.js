function squareSum(numbers) {
    var ret = 0;
    for (let i = 0; i < numbers.length; i++){
        ret += numbers[i] * numbers[i];
    }
    return ret;
}

/*
// ********** OPCIÓN 1 **********
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
        return (n*n) + sum;
    }, 0)
}

// ********** OPCIÓN 2 **********
function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
}

// ********** OPCIÓN 3 **********
function squareSum(numbers){
    var sum = 0;
    numbers.forEach(function(n) {
        sum += n * n
    });
    return sum;
}

// ********** OPCIÓN 4 **********
function squareSum(numbers){
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += (numbers[i] * numbers[i]);
    }
    return result;
}

// ********** OPCIÓN 5 **********
function squareSum(numbers){
    var totalSum = 0;
    for (i=0;i<numbers.length;i++)
    {
        totalSum += Math.pow(numbers[i], 2);
    }
    return totalSum;
}

*/
