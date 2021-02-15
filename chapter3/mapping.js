//using map - returns copy - doesn't modify original
//reverse() function modifies original 
// push and pop - modifies original
// sort() - modifies original

const numbers = [1,2,3,4,5]

const double = x => x * 2;

const doubledNumbers = numbers.map(double)

console.log(doubledNumbers)