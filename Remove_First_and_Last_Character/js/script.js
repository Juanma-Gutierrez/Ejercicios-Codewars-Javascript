window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = removeChar("test");
    document.getElementById("res2").innerHTML = removeChar("0123456789");
    document.getElementById("res3").innerHTML = removeChar("abcdefghijklmnopqrstuvwxyz");
    document.getElementById("res4").innerHTML = removeChar("aabbcc");
    document.getElementById("res5").innerHTML = removeChar("12345");
    document.getElementById("res6").innerHTML = removeChar("12345 12345");
}