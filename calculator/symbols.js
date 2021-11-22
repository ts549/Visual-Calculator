/**
 * Keeps track of period syntax and valid parentheses
 */
let period = false;
let openPar = 0;

/**
 * Function to reset colors given with respect to an object
 */
 let resetColors = function (val) {
    let buttons = document.querySelectorAll(".button");

    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "rgb(238,238,238)";
    }

    val.style.backgroundColor = "red";
};

/**
 * Add listeners to operations
 */
 document.getElementById("(").addEventListener("click", function() {
    resetColors(this);

    if (count >= 22) {
        alert("Maximum value reached!");
        return;
    }

    document.getElementById("screen").innerHTML += this.id;

    period = false;
    count++;
    openPar++;
});
document.getElementById(")").addEventListener("click", function() {
    resetColors(this);

    if (openPar == 0) return;

    if (count >= 22) {
        alert("Maximum value reached!");
        return;
    }

    document.getElementById("screen").innerHTML += this.id;

    count++;
    openPar--;
    period = false;
});

document.getElementById("AC").addEventListener("click", function() {
    count = 0;
    document.getElementById("screen").innerHTML = "";
    period = false;

    resetColors(this);
});

/**
 * Function to add operation to display and restrictions
 */
 let addOperation = function() {
    resetColors(this);

    html = document.getElementById("screen").innerHTML;
    if (html[html.length - 1] == '/' || 
        html[html.length - 1] == 'x' || 
        html[html.length - 1] == '-' || 
        html[html.length - 1] == '+') {
            return;
    }

    document.getElementById("screen").innerHTML += this.id;

    period = false;

    count++;
};

document.getElementById(".").addEventListener("click", addPeriod);
document.getElementById("/").addEventListener("click", addOperation);
document.getElementById("x").addEventListener("click", addOperation);
document.getElementById("-").addEventListener("click", addOperation);
document.getElementById("+").addEventListener("click", addOperation);
