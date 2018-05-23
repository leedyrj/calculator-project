// Requirements:

// 1. Create an HTML file that has two input fields to accept the two numbers to perform operations on.
// 2. Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
// 3. In your JavaScript, put an event listener on each of the buttons.
// 4. When the user performs one of the operations, output the result to another DOM element of your choice.


let additionButton = document.getElementById('addition');
let subtractionButton = document.getElementById('subtraction');
let multiplicationButton = document.getElementById('multiplication');
let divisionButton = document.getElementById('division');

additionButton.addEventListener('click', function() {
    let num1 = document.getElementById('number-one').value;
    let num2 = document.getElementById('number-two').value;
    document.getElementById('output').innerHTML = parseInt(num1) + parseInt(num2)
}); 


subtractionButton.addEventListener('click', function() {
    let num1 = document.getElementById('number-one').value;
    let num2 = document.getElementById('number-two').value;
    document.getElementById('output').innerHTML = parseInt(num1) - parseInt(num2)
});

multiplicationButton.addEventListener('click', function() {
    let num1 = document.getElementById('number-one').value;
    let num2 = document.getElementById('number-two').value;
    document.getElementById('output').innerHTML = parseInt(num1) * parseInt(num2)
});

divisionButton.addEventListener('click', function() {
    let num1 = document.getElementById('number-one').value;
    let num2 = document.getElementById('number-two').value;
    if (num2 === '0') {
        alert("Can't divide by 0.  Choose another number.")
    } else {
    document.getElementById('output').innerHTML = parseInt(num1) / parseInt(num2)
    }
});


