let stein = document.getElementById("stein");
let saks = document.getElementById("saks");
let papir = document.getElementById("papir");

let userInput = "";

stein.addEventListener("click", function() {
    userInput = "stein";
    confirm();
});

saks.addEventListener("click", function() {
    userInput = "saks";
    confirm();
});

papir.addEventListener("click", function() {
    userInput = "papir";
    confirm();
});

function confirm() {
    alert("Du valgte " + userInput);

    let computerAnswer = Math.floor(Math.random() * 3) + 1;
    if (computerAnswer == 1) {
        computerAnswer = "stein";
        alert("Datamaskinen valgte " + computerAnswer);
    }
    else if (computerAnswer == 2) {
        computerAnswer = "saks";
        alert("Datamaskinen valgte " + computerAnswer);
    }
    else {
        computerAnswer = "papir";
        alert("Datamaskinen valgte " + computerAnswer);
    }

    if (userInput === computerAnswer) {
        alert("Uavgjort")
    }
    else if (
        (userInput == "stein" && computerAnswer == "saks") || 
        (userInput == "saks" && computerAnswer == "papir") || 
        (userInput == "papir" && computerAnswer == "stein")
        ) {
        alert("Seier")
    }
    else {
        alert("Tap")
    }
}