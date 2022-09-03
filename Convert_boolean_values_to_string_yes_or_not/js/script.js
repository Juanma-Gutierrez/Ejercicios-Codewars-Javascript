window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = boolToWord(true);
    document.getElementById("res2").innerHTML = boolToWord(false);
}