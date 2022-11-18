window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = longest("xyaabbbccccdefww", "xxxxyyyyabklmopq");
    document.getElementById("res2").innerHTML = longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz");
    document.getElementById("res3").innerHTML = longest("abc", "efg");
    document.getElementById("res4").innerHTML = longest("aaabbbccc", "abc");
    document.getElementById("res5").innerHTML = longest("aa", "aab");
    document.getElementById("res6").innerHTML = longest("abcd", "abcdefghijk");
}