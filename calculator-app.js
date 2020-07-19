// To target the display screen
const input = document.querySelector('p');
input.innerHTML = 0;

// To target the operation buttons
const ac = document.querySelector('.btn-ac');
const cl = document.querySelector('.btn-c');
const posNeg = document.querySelector('.btn-pos-neg');
const decimal = document.querySelector('.btn-decimal');
const equals = document.querySelector('.btn-equals');

// To target all the number buttons
const numButton = document.querySelectorAll('.btn-num');

// To target all the maths operator buttons
const mathOp = document.querySelectorAll('.btn-math');

// Memory of button presses
let memory = [];

// Enables the ability to use a media query
let mQ = window.matchMedia( "(max-width: 767px)" );

// Targets each number button and loops through dynamically
numButton.forEach(button => {

  button.addEventListener('click', () => {

    // If function to check if the current value is 0, or a math operator,   
    if ( input.innerHTML == 0 || isNaN(input.innerHTML) ) {
      input.innerHTML = button.dataset.value;
    } else {
      input.innerHTML += button.dataset.value;
    }

  })

});

// Targets each math operator (excluding = ) and loops through dynamically
mathOp.forEach(button => {

  button.addEventListener('click', () => {

    memory.push(input.innerHTML);
    input.innerHTML = button.dataset.value;
    memory.push(input.innerHTML);

  })

});

// Clears the screen and sets the value to zero -- also, clears the memory
ac.addEventListener('click', () => {

  memory = [];
  input.innerHTML = 0;

});

// Clears the screen and sets the value to zero -- also, clears the memory
cl.addEventListener('click', () => {

  memory = [];
  input.innerHTML = 0;
  
});

// To change the sign of the display value
posNeg.addEventListener('click', () => {
  input.innerHTML = -input.innerHTML;
});

// Adds decimal to values
decimal.addEventListener('click', () => {
  input.innerHTML += '.'
});

// Calculation on equals press
equals.addEventListener('click', () => {

  // Adds last value to memory array
  memory.push(input.innerHTML);

  // Joins the array into a string, then uses the eval function to calculate the string
  let calcString = memory.join("");
  let answer = eval(calcString);

  if (mQ.matches) {
    // window width is less than 767px
    limitAnswer = answer.toString().substring(0, 9);
  } else {
    // window width is greater than 767px
    limitAnswer = answer.toString().substring(0, 14);
  }

  // Limits the total length of the input field
  input.innerHTML = limitAnswer;

  // Clears memory
  memory = [];

});