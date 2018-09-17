// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const num = 1000

let a = 1, b = 2, c = 0

loop1: for (a; a + b + c != num; a++) {
    b = a + 1
    for (b; a + b + c <= num; b++) {
        if (Number.isInteger(Math.sqrt(a * a + b * b))) {
            c = Math.sqrt(a * a + b * b)
            if (a + b + c === num) break loop1
        }
    }
}

console.log('A ', a, ', B ', b, ', C ', c, ', Sum: ', a+b+c, ', Product: ', a*b*c)