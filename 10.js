// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

const num = 2000000
let arr = [2,3,5,7]

for (i = 7; i < num; i += 2) {
    if (i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && arr.reduce((rv, cv) => rv = i % cv ? rv : false, true))
        arr.push(i)
}

console.log(arr.reduce((rv, cv) => rv + cv, 0))