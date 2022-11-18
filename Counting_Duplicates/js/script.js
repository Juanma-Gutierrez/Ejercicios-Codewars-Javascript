window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = duplicateCount("abcde");
    document.getElementById("res2").innerHTML = duplicateCount("aabbcde");
    document.getElementById("res3").innerHTML = duplicateCount("aabBcde");
    document.getElementById("res4").innerHTML = duplicateCount("indivisibility");
    document.getElementById("res5").innerHTML = duplicateCount("Indivisibilities");
    document.getElementById("res6").innerHTML = duplicateCount("aA11");
}