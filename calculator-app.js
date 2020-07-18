// To target the display screen
const input = document.querySelector('p');
input.innerHTML = 0;

// To target the button pad
const buttonPad = document.querySelector('.button-pad');

// To target the operation buttons
const ac = document.querySelector('.btn-ac');
const cl = document.querySelector('.btn-c');
const posNeg = document.querySelector('.btn-pos-neg');
const div = document.querySelector('.btn-div');
const multiply = document.querySelector('.btn-multiply');
const minus = document.querySelector('.btn-minus');
const plus = document.querySelector('.btn-plus');
const decimal = document.querySelector('.btn-decimal');
const equals = document.querySelector('.btn-equals');

// To target all the number buttons
const numButton = document.querySelectorAll('.btn-num');

// To target individual number buttons
const zero = document.querySelector('.btn-zero');
const one = document.querySelector('.btn-one');
const two = document.querySelector('.btn-two');
const three = document.querySelector('.btn-three');
const four = document.querySelector('.btn-four');
const five = document.querySelector('.btn-five');
const six = document.querySelector('.btn-six');
const seven = document.querySelector('.btn-seven');
const eight = document.querySelector('.btn-eight');
const nine = document.querySelector('.btn-nine');

// Targets each number button and loops through dynamically
numButton.forEach(button => {

  button.addEventListener('click', () => {

    if ( input.innerHTML == 0 ) {
      input.innerHTML = button.dataset.value;

    } else {
      input.innerHTML += button.dataset.value;
    }

  })

});

// Clears the screen and sets the value to zero
ac.addEventListener('click', () => {
  input.innerHTML = 0;
});

// Clears the screen and sets the value to zero
cl.addEventListener('click', () => {
  input.innerHTML = 0;
});

// To change the sign of the display value
posNeg.addEventListener('click', () => {
  input.innerHTML = -input.innerHTML;
});

decimal.addEventListener('click', () => {
  input.innerHTML += '.'
});