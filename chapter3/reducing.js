
const numbers = [1,2,4,7,9,22,33,12];

const sum = numbers.reduce((acc, x) => {
    console.log(`acc is ${acc}`);
    console.log(`x is ${x}`);
    return acc + x;
} ,0)

console.log(sum)