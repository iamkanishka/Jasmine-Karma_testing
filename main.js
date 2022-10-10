
function Calculate(value) {
    const inputValue = value;
    const expression = /\+|\-|\*|\//
    const numbers = inputValue.split(expression);
    const numberA = +numbers[0];
    const numberB = +numbers[1];
    let getoperator = inputValue.match(expression);
   if(isNaN(numberA) || isNaN(numberB) || getoperator ===null){
        updateResult('Expression Not recogniced')
        return
    }
    let operator =getoperator[0]
    const calculator = new Calculator();
    calculator.add(numberA);
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

document.getElementById('inputValue') && document.getElementById('inputValue').addEventListener('change', function(event){
   Calculate(event.target.value)
})