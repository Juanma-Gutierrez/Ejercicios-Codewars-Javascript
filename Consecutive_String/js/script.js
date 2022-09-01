window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click", execute);
};

function execute() {
    document.getElementById("res1").innerHTML = longestConsec(
        ["zone", "abigail", "theta", "form", "libe", "zas"],
        2
    );
    document.getElementById("res2").innerHTML = longestConsec(
        [
            "ejjjjmmtthh",
            "zxxuueeg",
            "aanlljrrrxx",
            "dqqqaaabbb",
            "oocccffuucccjjjkkkjyyyeehh",
        ],
        1
    );
    document.getElementById("res3").innerHTML = longestConsec(
        [
            "itvayloxrp",
            "wkppqsztdkmvcuwvereiupccauycnjutlv",
            "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
        ],
        2
    );
    document.getElementById("res4").innerHTML = longestConsec(
        ["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"],
        2
    );
    document.getElementById("res5").innerHTML = longestConsec(
        ["zone", "abigail", "theta", "form", "libe", "zas"],
        -2
    );
    document.getElementById("res6").innerHTML = longestConsec(
        ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"],
        3
    );
    document.getElementById("res7").innerHTML = longestConsec(
        ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"],
        15
    );
    document.getElementById("res8").innerHTML = longestConsec(
        ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"],
        0
    );
}
