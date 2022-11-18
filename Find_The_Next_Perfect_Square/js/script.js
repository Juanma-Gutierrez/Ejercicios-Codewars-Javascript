window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    var data = [];
    document.getElementById("res").innerHTML  = findNextSquare(121);
    document.getElementById("res1").innerHTML = findNextSquare(625);
    document.getElementById("res2").innerHTML = findNextSquare(319225);
    document.getElementById("res3").innerHTML = findNextSquare(15241383936);
    document.getElementById("res4").innerHTML = findNextSquare(-1);
    document.getElementById("res5").innerHTML = findNextSquare(0);
    document.getElementById("res6").innerHTML = findNextSquare(25);
}