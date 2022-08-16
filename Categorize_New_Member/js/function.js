function openOrSenior(data) {
    for (var res = [], i = 0; i < data.length; i++){
        ((data[i][0] >= 55) && data[i][1] > 7) ? res.push("Senior") : res.push("Open");
    }
    return res;
}

/*
// ********** OPCIÓN 1 **********
function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

// ********** OPCIÓN 2 **********
function openOrSenior(data){
    function determineMembership(member){
        return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
    }
    return data.map(determineMembership);
}

// ********** OPCIÓN 3 **********
function openOrSenior(data){
    return data.map(function(d){
        return d[0] >= 55 && d[1] > 7 ? 'Senior' : 'Open';
    });
}

// ********** OPCIÓN 4 **********
function openOrSenior(data){
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
}

// ********** OPCIÓN 5 **********
const openOrSenior = (members) => members.map(([age, handicap]) => (age >= 55) && (handicap > 7) ? 'Senior' : 'Open')

*/