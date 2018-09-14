// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

const num = 10001
let arr = [2,3,5,7]

for (i = 7; arr.length != num; i += 2) {
    if (i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && arr.reduce((rv, cv) => rv = i % cv ? rv : false, true))
        arr.push(i)
    
}

console.log(
    arr[arr.length-1]
)