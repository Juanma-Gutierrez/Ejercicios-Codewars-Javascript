window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = getMiddle("Test");
    document.getElementById("res2").innerHTML = getMiddle("Test");
    document.getElementById("res3").innerHTML = getMiddle("miDdle");
    document.getElementById("res4").innerHTML = getMiddle("1234567");
}