var tiles = document.getElementsByClassName("color_option");
var colors = [];
var length = 6;
var winnerColor;
var headerView = document.getElementById("header");
var questionView = document.getElementById("question");
var messageView = document.querySelector("span")


// ------ Level  ------ //

function setLevel() {
    var visibility = length == 6 ? 'visible' : 'hidden'
    for (var i = 3; i < tiles.length; i++) {
        tiles[i].style.visibility = visibility;
    }
    document.getElementById("easy").disabled = length != 6;
    document.getElementById("hard").disabled = length == 6;
}

// ---------------------- INIT ---------------------- //

function setUpTiles(length) {
    headerView.style.backgroundColor = "#232323";
    messageView.textContent = "Play";
    for (var i = 0; i < length; i++) {
        let j = i;
        colors[j] = getRandomColor();
        tiles[j].style.backgroundColor = colors[j];
        tiles[j].addEventListener("click", function() { solve(j); });
    }
    winnerColor = colors[getRandomNumber(length)];
    questionView.textContent = `${winnerColor}`;
}

// ---------------------- SOLVE ---------------------- //
function solve(index) {
    if (winnerColor === colors[index]) {
        messageView.textContent = "Win";
        headerView.style.backgroundColor = winnerColor;
        for (var i = 0; i < length; i++) {
            let j = i;
            tiles[j].style.backgroundColor = winnerColor;
            tiles[j].removeEventListener("click", function() { solve(j); });
        }
    } else {
        messageView.textContent = "Try again";
        tiles[index].style.backgroundColor = "#232323";
    }
}

function setupButtons() {
    document.getElementById("newGame").addEventListener("click", function() {
        setUpTiles(length);
    });

    document.getElementById("easy").addEventListener("click", function() {
        length = 3;
        setLevel(false);
        setUpTiles(3);
    });
    document.getElementById("hard").addEventListener("click", function() {
        length = 6;
        setLevel(true);
        setUpTiles(6);
    });
}
// ------ Colors ------ //

function getRandomNumber(length) {
    return Math.floor((Math.random() * length));
}

function getRandomColor() {
    var R = getRandomNumber(256);
    var G = getRandomNumber(256);
    var B = getRandomNumber(256);
    return `RGB(${R}, ${G}, ${B})`;
}

// ---------------------- RUN ---------------------- //


setupButtons();
setUpTiles(6);
setLevel(true)
