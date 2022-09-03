window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    document.getElementById("res1").innerHTML = friend(["Ryan", "Kieran", "Mark"]);
    document.getElementById("res2").innerHTML = friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]);
    document.getElementById("res3").innerHTML = friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]);
    document.getElementById("res4").innerHTML = friend(["Love", "Your", "Face", "1"]);
}