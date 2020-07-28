'use strict'

const fizzBuzz = function(number) {

  let i = 1;

  while (i <= number) {

    let output = '';

    if (i % 3 === 0) {
      output = 'Fizz';
    }

    if (i % 5 === 0) {
      output += 'Buzz';
    }

    console.log(output || i);

    i++;

  }

}

fizzBuzz(20);
