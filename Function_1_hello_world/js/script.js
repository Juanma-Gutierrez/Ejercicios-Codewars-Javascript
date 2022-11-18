window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    var data = [];
    document.getElementById("res1").innerHTML = greet();
}

