var secretNum = getRandomNum();

function compareGuess() {

    var userGuess = document.getElementById("user-guess")["0"].value;

    if (userGuess == secretNum) {
        changeDisplay("Win")
    } else if (userGuess > secretNum) {
        changeDisplay("High")
    } else if (userGuess < secretNum) {
        changeDisplay("Low")
    }
    else {
        changeDisplay("Error")
    }

    document.getElementById("user-guess")["0"].select();
}

function changeDisplay(status) {
    var disImage = document.getElementById("display-img");
    var disMessage = document.getElementById("start-game");
    var event = "";
    var message = "";

    switch (status) {
        case "Win":
            event = "win.png";
            break;
        case "High":
            event = "high.jpg";
            break;
        case "Low":
            event = "low.jpg";
            break;
        case "Error":
            event = "error.jpg";
            message = "Please pick a right Number!"
            break;
    }
    disImage.src = "img/" + event;
    disMessage.innerText = message;
}

function getRandomNum() {
    return Math.ceil(Math.random() * 10)
}
