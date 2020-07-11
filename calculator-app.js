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

// Display numbers on screen
zero.addEventListener('click', () => {

  // If function replaces the zero on the screen rather than append numbers to it
  if ( input.innerHTML == 0 ) {
    input.innerHTML = 0;
  } else {
    input.innerHTML += 0;
  }

});

one.addEventListener('click', () => {

  if ( input.innerHTML == 0 ) {
    input.innerHTML = 1;
  } else {
    input.innerHTML += 1;
  }

});

two.addEventListener('click', () => {

  if ( input.innerHTML == 0 ) {
    input.innerHTML = 2;
  } else {
    input.innerHTML += 2;
  }

});

three.addEventListener('click', () => {

  if ( input.innerHTML == 0 ) {
    input.innerHTML = 3;
  } else {
    input.innerHTML += 3;
  }

});

four.addEventListener('click', () => {

  if ( input.innerHTML == 0 ) {
    input.innerHTML = 4;
  } else {
    input.innerHTML += 4;
  }

});

five.addEventListener('click', () => {

  if ( input.innerHTML == 0 ) {
    input.innerHTML = 5;
  } else {
    input.innerHTML += 5;
  }

});

six.addEventListener('click', () => {

  if ( input.innerHTML == 0 ) {
    input.innerHTML = 6;
  } else {
    input.innerHTML += 6;
  }

});

seven.addEventListener('click', () => {

  if ( input.innerHTML == 0 ) {
    input.innerHTML = 7;
  } else {
    input.innerHTML += 7;
  }

});

eight.addEventListener('click', () => {

  if ( input.innerHTML == 0 ) {
    input.innerHTML = 8;
  } else {
    input.innerHTML += 8;
  }

});

nine.addEventListener('click', () => {

  if ( input.innerHTML == 0 ) {
    input.innerHTML = 9;
  } else {
    input.innerHTML += 9;
  }

});

// How can I cycle through the numbers rather than listing them all out like above?
// for ( let i = 0; i < 10; i++ ) {
//   buttonPad.addEventListener('click', () => {
//     input.innerHTML += numButton[i].value;
//   });
// }

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