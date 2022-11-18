window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = squareSum([1, 2, 2]);
    document.getElementById("res2").innerHTML = squareSum([3, 4, 5]);
    document.getElementById("res3").innerHTML = squareSum([2]);
    document.getElementById("res4").innerHTML = squareSum([2, 5, 10]);
}