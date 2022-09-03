window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = getSum(1, 0);
    document.getElementById("res2").innerHTML = getSum(1, 2);
    document.getElementById("res3").innerHTML = getSum(0, 1);
    document.getElementById("res4").innerHTML = getSum(1, 1);
    document.getElementById("res5").innerHTML = getSum(-1, 0);
    document.getElementById("res6").innerHTML = getSum(-1, 2);
}