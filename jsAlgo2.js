// Write a function that returns the sum of all numbers regardless of # of params

function totalSum(...params) {
  let total = 0;
  params.forEach((perelem) => {
    total += perelem;
  });
  return total;
}

console.log(totalSum(1, 3, 4, 6));
