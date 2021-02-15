//sort takes in comparative function - takes 2 arguments
const numbers = [10,2,13,40,5,6,1,7]
const ascending = (a,b) => {
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
}

const descending = (a,b) => {
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
}
const sortNumbers = numbers.slice().sort(descending)
console.log(sortNumbers);