var location1 = 2;
var location2 = 3;
var location3 = 4;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


while (isSunk == false) {
    guess = prompt("please guess the location ( 0-6 )");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid entry")
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("You have " + hits + " hits!");
            if (hits == 3) {
                isSunk = true;
                alert("You sunk the battleship");
            }

        } else {
            alert("Sorry you missed and have only " + hits + " hits so far");
        }
    }
}

var stats = "you took " + guesses + " guesses to sink the battleship " + "which means accuracy was " + (3 / guesses);
alert(stats);
