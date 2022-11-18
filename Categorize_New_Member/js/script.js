window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    var data = [[45, 12],[55, 21],[19, -2],[104, 20]];
    console.log('Salida:',openOrSenior(data));
    document.getElementById("res").innerHTML = openOrSenior(data);
}