function fizzBuzz(number) {

  for (let i = 1; i <= number; i++) {

    console.log(
      (i % 3 === 0) ? ((i % 5 === 0) ? 'FizzBuzz' : 'Fizz') : ((i % 5 === 0) ? 'Buzz' : i)
    );

  }

}

fizzBuzz(20);
