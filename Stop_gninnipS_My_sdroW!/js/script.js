window.onload = function () {
    var result = document.getElementById("result");
    result.addEventListener("click",execute);
};

function execute(){
    var data = [];
    document.getElementById("res").innerHTML  = spinWords("Welcome");
    document.getElementById("res1").innerHTML = spinWords("Hey fellow warriors");
    document.getElementById("res2").innerHTML = spinWords("This is a test");
    document.getElementById("res3").innerHTML = spinWords("This is another test");
    document.getElementById("res4").innerHTML = spinWords("You are almost to the last test");
    document.getElementById("res5").innerHTML = spinWords("Just kidding there is still one more");
    document.getElementById("res6").innerHTML = spinWords("Seriously this is the last one");
}