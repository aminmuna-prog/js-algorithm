// sum all prime numbers

function isPrime(_num) {
  for (let i = 2; i < _num; i++) {
    if (_num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(sumnum) {
  let sum = 0;
  for (let i = 2; i <= sumnum; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

const result = sumPrimes(5);
console.log(result);
