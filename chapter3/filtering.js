// using filter - return true or false

const numbers = [1,2,3,4,5,6,7,8,9,10];

const isEven = x => x % 2 === 0;

const newEvenNumbers = numbers.filter(isEven)

console.log(newEvenNumbers);


var evenNumbers = [];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }
}

const words = [
    'hello',
    'goodbye',
    'the',
    'Antarctica',
]

const createLengthTest = minLength => 
    word => word.length > minLength;

const longWords = words.filter(createLengthTest(5))
console.log(longWords)

 
