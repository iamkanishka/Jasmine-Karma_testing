function Calculate(event) {
    const inputValue = event.target.value;
    const expression = /\+|\-|\*|\//
    const numbers = inputValue.split(expression);
    console.log(numbers);
    const numberA = +numbers[0];
    const numberB = +numbers[1];
    let operator = inputValue.match(expression)[0];
    const calculator = new Calculator();
    calculator.add(4);
    calculator.add(4);
    console.log(calculator.total);
    let result
    switch (operator) {
        case '+':
            result = calculator.add(numberB);
            break;
        case '-':
            result = calculator.subtract(numberB);
            break;
        case '*':
            result = calculator.multiply(numberB);
            break;
        case '/':
            result = calculator.divide(numberB);
           break;
   }

   updateResult(result)

}

function updateResult(result){
    let element = document.getElementById('result');
    if(element){
        element.innerText = result
    }
}

document.getElementById('inputValue').addEventListener('change', Calculate)