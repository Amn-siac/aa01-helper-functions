/*
Write a function isPrime(number) that returns true if the number is a prime
number. A prime number is a number that is only divisible by 1 and itself.

Write a function prevPrime(number) that accepts a number as an argument. The
function should return the nearest prime number that is smaller than the given
argument. Since 2 is the smallest prime number, return null if no number can be
returned. Use the isPrime function as a helper function.
*/

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


function prevPrime(num) {
  let prime;
  if (num <= 2) {
    return null;
  }
  for (let i = 1; prime === undefined; i++) {
    if (isPrime(num - i)) {
      prime = num - i;
    }
  }
  return prime;
}

// console.log(prevPrime(32)); // 31
// console.log(prevPrime(33)); // 31
// console.log(prevPrime(14)); // 13
// console.log(prevPrime(7)); // 5
// console.log(prevPrime(4)); // 3
// console.log(prevPrime(2)); // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  isPrime,
  prevPrime
};
