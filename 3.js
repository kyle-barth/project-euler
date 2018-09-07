// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const num = 600851475143 
let largestPF = 0
let maxNum = Math.round(Math.sqrt(num))

loop1: for (let i = maxNum % 2 === 0 ? maxNum + 1 : maxNum; i > 0; i -= 2) {
    for (let x = 2; x <= i; x++) {
        if (i % x === 0 && i != x) {
            break
        } else if ((i % x === 0 && i === x)) {
            if (num % x === 0) {
                largestPF = x
                break loop1
            } 
        }
    }
}

console.log(largestPF === 0 ? 'Number has no prime factors' : 'Largest PF: ', largestPF)