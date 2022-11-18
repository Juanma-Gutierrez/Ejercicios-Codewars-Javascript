window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = abbrevName("Sam Harris");
    document.getElementById("res2").innerHTML = abbrevName("patrick feeney");
    document.getElementById("res3").innerHTML = abbrevName("Jon Snow");
    document.getElementById("res4").innerHTML = abbrevName("eddar stark");
    document.getElementById("res5").innerHTML = abbrevName("Joffrey baratheon");
    document.getElementById("res6").innerHTML = abbrevName("Cersei Lannister");
}