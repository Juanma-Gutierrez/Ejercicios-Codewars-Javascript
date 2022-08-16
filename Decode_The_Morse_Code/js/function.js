decodeMorse = function (morseCode) {
    var new_str = morseCode.split(" ");
    new_str = cleanSpaces(new_str);
    for (let i = 0; i < new_str.length; i++) {
        new_str[i] = translateCode(new_str[i]);
    }
    new_str = new_str.join("");
    return new_str.trimLeft().trimRight();
};

function translateCode(code) {
    var dict = {
        ".-": "A",
        "-...": "B",
        "-.-.": "C",
        "-..": "D",
        ".": "E",
        "..-.": "F",
        "--.": "G",
        "....": "H",
        "..": "I",
        ".---": "J",
        "-.-": "K",
        ".-..": "L",
        "--": "M",
        "-.": "N",
        "---": "O",
        ".--.": "P",
        "--.-": "Q",
        ".-.": "R",
        "...": "S",
        "-": "T",
        "..-": "U",
        "...-": "V",
        ".--": "W",
        "-..-": "X",
        "-.--": "Y",
        "--..": "Z",
        "--..--": ",",
        "---...": ":",
        ".-.-.-": ".",
        "-.-.--": "!",
        "...---...": "SOS",
    };
    return dict[code] == undefined ? " " : dict[code];
}

function cleanSpaces(new_str) {
    for (let i = 0; i < new_str.length - 1; i++) {
        if (new_str[i] == "" && new_str[i + 1] == "") {
            new_str.splice(i, 1);
        }
    }
    return new_str;
}

/*
// ********** OPCIÓN 1 **********
decodeMorse = function(morseCode){
    function decodeMorseLetter(letter) {
        return MORSE_CODE[letter];
    }
    function decodeMorseWord(word) {
        return word.split(' ').map(decodeMorseLetter).join('');
    }
    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}

// ********** OPCIÓN 2 **********
decodeMorse = function(morseCode){
    return morseCode
        .trim()
        .split(/  | /)
        .map( (code) => MORSE_CODE[code] || ' ')
        .join('');
}

// ********** OPCIÓN 3 **********
decodeMorse = function(morseCode){
    return morseCode.trim().split(' ').map(a => MORSE_CODE[a] || ' ').join('').replace(/\s+/g, ' ');
}

// ********** OPCIÓN 4 **********
decodeMorse = function(morseCode){
    return morseCode.trim().split('   ').map(function(word) {
        return word.split(' ').map(function(letter) {
        return MORSE_CODE[letter];
    }).join('');
    }).join(' ');
}

// ********** OPCIÓN 5 **********
const convertCharacter = character => MORSE_CODE[character];

const convertWord = word => word
    .split(" ")
    .map(convertCharacter)
    .join('');

const convertSentence = sentence => sentence
    .trim()
    .split('  ')
    .map(convertWord)
    .join(' ');

decodeMorse = morseCode => convertSentence(morseCode);
*/