window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    var data = [];
    document.getElementById("res").innerHTML  = duplicateEncode("din");
    document.getElementById("res1").innerHTML = duplicateEncode("recede");
    document.getElementById("res2").innerHTML = duplicateEncode("Success");
    document.getElementById("res3").innerHTML = duplicateEncode("(( @");
    document.getElementById("res4").innerHTML = ')()))())())()(' + " " + duplicateEncode(")()))()))))()(");
    document.getElementById("res5").innerHTML = '(((()())()))))(()' + " " + duplicateEncode('emuam@mmQm)mmmPxm');
    document.getElementById("res6").innerHTML = duplicateEncode("aabbcc");
}