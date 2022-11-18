window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res").innerHTML  = isTriangle(5,2,8);

}