window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = isValidWalk(['n','s','n','s','n','s','n','s','n','s']);
    document.getElementById("res2").innerHTML = isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']);
    document.getElementById("res3").innerHTML = isValidWalk(['w']);
    document.getElementById("res4").innerHTML = isValidWalk(['n','n','n','s','n','s','n','s','n','s']);
}