function Calculate(event){
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
}

document.getElementById('inputValue').addEventListener('change',Calculate)