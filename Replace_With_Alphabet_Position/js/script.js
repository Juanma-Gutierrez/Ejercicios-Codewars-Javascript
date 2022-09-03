window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = alphabetPosition("abcde");
    document.getElementById("res2").innerHTML = alphabetPosition("aabbcc");
    document.getElementById("res3").innerHTML = alphabetPosition("The sunset sets at twelve o' clock.");
    document.getElementById("res4").innerHTML = alphabetPosition("hello world!");
    document.getElementById("res5").innerHTML = alphabetPosition("123456");
    document.getElementById("res6").innerHTML = alphabetPosition("abcde");
}