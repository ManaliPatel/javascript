
const map = (arr, func) => {
    var result = []
    for(var i = 0; i < arr.length; i++){
        result.push(func(arr[i])) 
    }
    return result
}

const mapOne = (arr, func) =>
    arr.reduce( (acc, x) => [
        ...acc,
        func(x)
    ],[]);

console.log(mapOne([1,2,3], x => x * 2));