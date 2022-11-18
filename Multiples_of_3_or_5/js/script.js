window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    var data = [];
    document.getElementById("res").innerHTML  = solution(10);
    document.getElementById("res1").innerHTML = solution(-10);
    document.getElementById("res2").innerHTML = solution(20);
    document.getElementById("res3").innerHTML = solution(30);
    document.getElementById("res4").innerHTML = solution(40);
    document.getElementById("res5").innerHTML = solution(50);
    document.getElementById("res6").innerHTML = solution(100);
}