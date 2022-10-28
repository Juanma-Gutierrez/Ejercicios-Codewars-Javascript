function longest(s1, s2) {
    let cad = (s1 + s2).split("").sort();
    var re = new Set(cad);
    let res = [...re].join("");
    return res;
}

/*
// ********** OPCIÓN 1 **********
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// ********** OPCIÓN 2 **********
function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}

// ********** OPCIÓN 3 **********
function longest(s1, s2) {
    s3 = s1 + s2;
    s4 = s3.split("");
    s4 = s4.sort().filter(function(element, index, array){
        return element !== array[index - 1];
    });
    return s4.join("");
}

// ********** OPCIÓN 4 **********
function longest(s1, s2) {
let str = new Set([...s1, ...s2]);
return [...str].sort().join('');
}

// ********** OPCIÓN 5 **********
function longest(s1, s2) {
    let output = [];
    let combi = s1.concat(s2);
    let array = combi.split("").sort();
    for (let i = 0; i <= array.length; i++) {
        console.log(array[i]); //test
        if (!output.includes(array[i])) {
            output.push(array[i]);
        }
    }
    return output.join("");
}

*/

