function friend(friends) {
    var res = [];
    friends.forEach(function (friend) {
        if (friend.length == 4) res.push(friend);
    });
    return res;
}

/*
// ********** OPCIÓN 1 **********
function friend(friends){
    return friends.filter(n => n.length === 4)
}

// ********** OPCIÓN 2 **********
const friend = friends => friends.filter(friend => friend.length == 4);

// ********** OPCIÓN 3 **********
function friend(friends){
    //Create new array called "myFriends" for add your friends
    var i,
    len = friends.length,
    myFriends = [];
    for (i = 0; i < len; i++) {
        //Check for names with length equal to four and it is not a number
        if(friends[i].length == 4 && isNaN(friends[i])) {
            myFriends.push(friends[i]);
        }
    }
    return myFriends;
}

// ********** OPCIÓN 4 **********
function friend(friends){
    return friends.filter(value => value.length === 4);
}

// ********** OPCIÓN 5 **********
function friend(friends){
    return friends.filter(function (name){
        return name.length == 4;
    });
}

*/
