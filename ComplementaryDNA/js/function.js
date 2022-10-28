function DNAStrand(dna) {
    dna = dna.replace(/A/g, "1");
    dna = dna.replace(/T/g, "2");
    dna = dna.replace(/C/g, "3");
    dna = dna.replace(/G/g, "4");
    dna = dna.replace(/1/g, "T");
    dna = dna.replace(/2/g, "A");
    dna = dna.replace(/3/g, "G");
    dna = dna.replace(/4/g, "C");
    console.log("Salida:", dna);
    return dna;
}

/*
// ********** OPCIÓN 1 **********
function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
        return DNAStrand.pairs[c]
    })
}

DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}

// ********** OPCIÓN 2 **********
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
    return dna.split('').map(function(v){ return pairs[v] }).join('');
}

// ********** OPCIÓN 3 **********
let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

// ********** OPCIÓN 4 **********
function DNAStrand(dna){
    var result = "";
        for(var i = 0; i < dna.length; i++) 
        {
            if (dna[i] === "A") 
        {
            result += "T";
        }
        else if (dna[i] === "T") 
        {
            result += "A";
        }
        else if (dna[i] === "C")
        {
            result += "G";
        }
        else if (dna[i] === "G")
        {
            result += "C";
        }
        else
        {
            result += dna[i];
        }
    }
    return result;
}

// ********** OPCIÓN 5 **********
function DNAStrand(dna) {
    return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
}

// ********** OPCIÓN 5 **********
function DNAStrand(dna){
    return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}
*/
