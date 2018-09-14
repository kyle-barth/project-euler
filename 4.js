// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
  
function abc(num) {
    loop1: for (i = num; i.toString().length >= num.toString().length; i--) {
        pal = parseInt(i.toString() + i.toString().split('').reverse().join(''))
        for (x = num; x.toString().length >= num.toString().length; x--) {
            if (pal % x === 0 && (pal / x).toString().length === num.toString().length) 
                return `Largest palindrome: ${pal}, Components ${x} * ${pal/x} `
        }
    }
}

console.log(abc(999))
