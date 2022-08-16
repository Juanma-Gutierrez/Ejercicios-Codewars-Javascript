window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res").innerHTML  = likes([]);
    document.getElementById("res1").innerHTML = likes(["Peter"]);
    document.getElementById("res2").innerHTML = likes(["Jacob", "Alex"]);
    document.getElementById("res3").innerHTML = likes(["Max", "John", "Mark"]);
    document.getElementById("res4").innerHTML = likes(["Alex", "Jacob", "Mark", "Max"]);

}