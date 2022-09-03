window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = repeatStr(6, "I");
    document.getElementById("res2").innerHTML = repeatStr(5, "Hello");
}