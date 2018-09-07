// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const num = 1000
largestPal = []

const min = num.toString().length

loop1: for (let i = num; i.toString().length >= num.toString().length - 1; i--) {
    for (let x = num; x.toString().length >= num.toString().length - 1; x--) {
        if ((i * x).toString().split('').reverse().join('') === (i * x).toString() ? true : false) {
            largestPal.push(i * x, i, x)
            break loop1
        }
    }
}

console.log('Largest palindrome: ', largestPal[0], ', Components: ', largestPal[1], ' * ', largestPal[2])