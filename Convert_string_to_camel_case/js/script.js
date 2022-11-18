window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click", execute);
};

function execute() {
    var data = [];
    document.getElementById("res").innerHTML = toCamelCase(data);
    document.getElementById("res1").innerHTML = toCamelCase("");
    document.getElementById("res2").innerHTML = toCamelCase(
        "the_stealth_warrior"
    );
    document.getElementById("res3").innerHTML = toCamelCase(
        "The-Stealth-Warrior"
    );
    document.getElementById("res4").innerHTML = toCamelCase("A-B-C");
    document.getElementById("res5").innerHTML = toCamelCase("");
    document.getElementById("res6").innerHTML = toCamelCase("");
}
