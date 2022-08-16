function duplicateEncode(word) {
    for (var new_word = word, i = 0; i < word.length; i++) {
        var rep = false;
        for (var j = i; j < word.length - 1; j++) {
            if (word[i].toUpperCase() === word[j + 1].toUpperCase()) {
                if (word[i] === "(") {
                    var reg = new RegExp(/\(/, "g");
                } else {
                    if (word[i] === ")") {
                        var reg = new RegExp(/\)/, "g");
                    } else {
                        var reg = new RegExp(word[i], "g");
                    }
                }
                new_word = new_word.replace(reg, ")");
                rep = true;
            }
        }
        if (!rep) new_word = new_word.replace(word[i], "(");
    }
    return new_word;
}

/*
// ********** OPCIÓN 1 **********


// ********** OPCIÓN 2 **********


// ********** OPCIÓN 3 **********


// ********** OPCIÓN 4 **********


// ********** OPCIÓN 5 **********


*/
