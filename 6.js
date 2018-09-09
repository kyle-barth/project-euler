// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// es6 is the bomb
function range1(i){ return i ? range1(i-1).concat(i) : []}
const num = range1(10)

console.log(Math.pow(num.reduce((pv, cv) => pv + cv, 0), 2) - num.reduce((pv, cv) => pv + cv * cv, 0))