// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const x = 1000
let arr = [] 

for (let i = 1; i < x; ++i) {
    if ( i % 3 === 0 || i % 5 === 0 ) {
        arr.push(i)
    }
}

// console.log('Arr: ', arr.toString()) // display the array for testing
console.log('Sum: ', arr.reduce((pv, cv) => pv + cv, 0))
