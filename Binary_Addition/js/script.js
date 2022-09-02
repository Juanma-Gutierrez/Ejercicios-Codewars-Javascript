window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = addBinary(1, 1);
    document.getElementById("res2").innerHTML = addBinary(5, 9);
    document.getElementById("res3").innerHTML = addBinary(10, 10);
    document.getElementById("res4").innerHTML = addBinary(4, 4);
    document.getElementById("res5").innerHTML = addBinary(8, 8);
    document.getElementById("res6").innerHTML = addBinary(16, 16);
}