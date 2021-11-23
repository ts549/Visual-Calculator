let operationStack = [];
let operandStack = [];

let operations = [
    '*','/','-','+'
]; //Increases space usage but improves readability and organization

let numbers = [
    '0','1','2','3','4','5','6','7','8','9'
];

let isOperation = function(character) {
    for (let operation of operations) {
        if (character === operation) return true;
    }
    return false;
};

let isNumber = function(character) {
    for (let number of numbers) {
        if (character === number) return true;
    }
    return false;
};

let performOperation = function(firstOperand, secondOperand, operation) {
    if (operation === '/') return firstOperand / secondOperand;
    if (operation === 'x') return firstOperand * secondOperand;
    if (operation === '-') return firstOperand - secondOperand;
    if (operation === '+') return firstOperand + secondOperand;
};

let computeExpression = function() {
    string = document.getElementById("screen").innerHTML;
    /**
     * Apply Dijkstra's two stack algorithm from the back of the expression
     */
    for (let i = string.length - 1; i >= 0; i--) {
        if (isOperation(string[i]) || string[i] == ')') {
            operationStack.push(string[i]);
        } else if (string[i] == '(') {
            while (operationStack[operationStack.length - 1] != ')') {
                firstOperand = operandStack.pop();
                secondOperand = operandStack.pop();
                operation = operationStack.pop();
            }
            operationStack.pop();

            result = performOperation(firstOperand, secondOperand, operation);
            operandStack.push(result);

        } else {
            number = "";

            while (i >= 0 && (isNumber(string[i]) || string[i] === '.')) {
                number = string[i--] + number;
            }

            operand = parseFloat(number);
            operandStack.push(operand);

            if (i >= 0 && !isNumber(string[i]) && string[i] != '.') {
                i++;
            }
        }
    }

    console.log(operationStack);
    console.log(operandStack);

    while(operationStack.length > 0) {
        firstOperand = operandStack.pop();
        secondOperand = operandStack.pop();
        operation = operationStack.pop();

        result = performOperation(firstOperand, secondOperand, operation);

        operandStack.push(result);
        console.log(operandStack);
    }

    document.getElementById("screen").innerHTML = operandStack.pop().toString();

};

document.getElementById("=").addEventListener("click", function() {
    resetColors(this);
    computeExpression();
});
