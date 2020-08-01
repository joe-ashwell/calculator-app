// To target the display screen
const input = document.querySelector('p.display-main');
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

// Answer var
let answer;

// Enables the ability to use a media query
let mQ = window.matchMedia( "(max-width: 767px)" );

// Targets each number button and loops through dynamically
numButton.forEach(button => {

  button.addEventListener('click', () => {

    // To check if the current value is 0, or a math operator, or the display is an answer and therefore you don't want to append to it   
    if ( input.innerHTML == 0 || isNaN(input.innerHTML) ) {
      input.innerHTML = button.dataset.value;
    } else {
      input.innerHTML += button.dataset.value;
    }

  })

});

// Targets each math operator (excluding '=' ) and loops through dynamically
mathOp.forEach(button => {

  button.addEventListener('click', () => {

    // Adds the number to memory but converts from string to float
    memory.push(parseFloat(input.innerHTML));
    input.innerHTML = button.dataset.value;
    input.innerHTML = button.dataset.value;
    memory.push(input.innerHTML);

    // To run the calculation and trigger after second number input
    if ( memory.length === 4 ) {
      
      if ( memory[1] === '*' ) {

        let ans = memory[0] * memory[2];
        memory.splice(0, 3);
        memory.unshift(ans);
        console.log(memory);
  
      } else if ( memory[1] === '+' ) {
  
        let ans = memory[0] + memory[2];
        memory.splice(0, 3);
        memory.unshift(ans);
        console.log(memory);
  
      } else if ( memory[1] === '/' ) {
  
        let ans = memory[0] / memory[2];
        memory.splice(0, 3);
        memory.unshift(ans);
        console.log(memory);
  
      } else if ( memory[1] === '-' ) {
  
        let ans = memory[0] - memory[2];
        memory.splice(0, 3);
        memory.unshift(ans);
        console.log(memory);
  
      }
    }
    
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
  memory.push(parseFloat(input.innerHTML));

  // To run the calculation       
    if ( memory[1] === '*' ) {

      answer = memory[0] * memory[2];

    } else if ( memory[1] === '+' ) {

      answer = memory[0] + memory[2];

    } else if ( memory[1] === '/' ) {

      answer = memory[0] / memory[2];

    } else if ( memory[1] === '-' ) {

      answer = memory[0] - memory[2];

    }

  // Displays final answer and limits length -- Not the most elegant solution, but it works
  if (mQ.matches) {
    // window width is less than 767px
    limitAnswer = answer.toString().substring(0, 9);
  } else {
    // window width is greater than 767px
    limitAnswer = answer.toString().substring(0, 14);
  }

  input.innerHTML = limitAnswer;

  // Clears memory
  memory = [];

});
