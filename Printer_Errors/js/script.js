window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = printerError("aaabbbbhaijjjm");
    document.getElementById("res2").innerHTML = printerError("aaaxbbbbyyhwawiwjjjwwm");
    document.getElementById("res3").innerHTML = printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz");
    document.getElementById("res4").innerHTML = printerError("abcd");
    document.getElementById("res5").innerHTML = printerError("aabbbbcc");
    document.getElementById("res6").innerHTML = printerError("abbcccddddeeeee");
}