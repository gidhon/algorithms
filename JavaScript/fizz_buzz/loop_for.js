const fizzBuzz = function fizzBuzz(range) {

  // cache the length of the array
  const length = range.length;

  for (let i = 0; i < length; i++) {

    if (range[i] % 15 === 0) console.log('FizzBuzz');
    else if (range[i] % 3 === 0) console.log('Fizz');
    else if (range[i] % 5 === 0) console.log('Buzz');
    else console.log(range[i]);

  }

}

const sequence = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
];

fizzBuzz(sequence);
