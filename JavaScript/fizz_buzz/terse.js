!function fizzBuzz(n) {

  for (let i = 0; i < n;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)

}(20);
