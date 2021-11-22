/**
 * Keeps track of number of characters inputted
 * For this calculator, max is 22
 */
let count = 0;

/**
 * Function to change the colors of boxes given no object
 */
let changeColor = function () {

    resetColors(this);

    if (count >= 22) {
        alert("Maximum value reached!");
        return;
    }

    document.getElementById("screen").innerHTML += this.id;

    count++;
};

/**
 * Function to add period to display
 */
let addPeriod = function() {

    resetColors(this);

    if (period) return;
    period = true;

    if (count >= 22) {
        alert("Maximum value reached!");
        return;
    }

    document.getElementById("screen").innerHTML += this.id;

    count++;
};

/**
 * Add listeners to numerical buttons
 */
document.getElementById("7").addEventListener("click", changeColor);
document.getElementById("8").addEventListener("click", changeColor);
document.getElementById("9").addEventListener("click", changeColor);
document.getElementById("4").addEventListener("click", changeColor);
document.getElementById("5").addEventListener("click", changeColor);
document.getElementById("6").addEventListener("click", changeColor);
document.getElementById("1").addEventListener("click", changeColor);
document.getElementById("2").addEventListener("click", changeColor);
document.getElementById("3").addEventListener("click", changeColor);
document.getElementById("0").addEventListener("click", changeColor);
