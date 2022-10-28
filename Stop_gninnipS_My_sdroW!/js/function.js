function spinWords(string) {
    string = string.split(" ");
    for (i = 0; i < string.length; i++) {
        if (string[i].length >= 5) {
            var reversed = string[i].split("").reverse().join("");
            string[i] = reversed;
        }
    }
    return string.join(" ");
}

/*
// ********** OPCIÓN 1 **********
function spinWords(words){
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}

// ********** OPCIÓN 2 **********
function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

// ********** OPCIÓN 3 **********
function spinWords(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
}

// ********** OPCIÓN 4 **********
function spinWords(str){
    wordsArray = str.split(' ');
    wordsArray.forEach(function(word, index){
    if (word.length > 4) {
        wordsArray[index] = word.split('').reverse().join('');
    }
    });
    return wordsArray.join(' ');
}

// ********** OPCIÓN 5 **********
function spinWords(str){
    return str.replace(/\w{5,}/g, function(w) {
        return w.split('').reverse().join('');
    });
}

*/
