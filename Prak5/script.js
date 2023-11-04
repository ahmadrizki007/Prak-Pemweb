//Ahmad Rizki Maulana
//121140105_RB

let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function appendOperator(operator) {
    if (currentInput.endsWith('%')) {
        return; 
    }

    if (currentInput.length > 0 && '+-*/'.includes(currentInput[currentInput.length - 1])) {
        currentInput = currentInput.slice(0, -1);
    }
    currentInput += operator;
    document.getElementById('result').value = currentInput;
}

function appendDecimal(decimal) {
    if (currentInput.endsWith('%')) {
        return; 
    }

    if (!currentInput.includes(decimal)) {
        currentInput += decimal;
    }
    document.getElementById('result').value = currentInput;
}

function calculateResult() {
    try {
        let expression = currentInput;
        expression = expression.replace(/%/g, '*0.01');
        expression = expression.replace(/,/g, '.');
        
        currentInput = eval(expression);
        document.getElementById('result').value = currentInput;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('result').value = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').value = currentInput;
}
