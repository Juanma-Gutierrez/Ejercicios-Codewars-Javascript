window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = litres(3);
    document.getElementById("res2").innerHTML = litres(6.7);
    document.getElementById("res3").innerHTML = litres(11.8);
}