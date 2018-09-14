// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let num = 20

let i = 0
let tmp

do {
    tmp = 0
    i += num
    for (let x = 1; x <= num; x++) {
        if (i % x === 0) {
            tmp++
        } else {
            break
        }
    }
} while ( tmp != num )

console.log('Smallest: ', i)