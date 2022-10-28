window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = opposite(1);
    document.getElementById("res2").innerHTML = opposite(14);
    document.getElementById("res3").innerHTML = opposite(-34);
    document.getElementById("res4").innerHTML = opposite(0);
    document.getElementById("res5").innerHTML = opposite(-10);
    document.getElementById("res6").innerHTML = opposite(10);
}