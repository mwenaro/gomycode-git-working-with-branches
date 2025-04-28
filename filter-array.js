// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
// function filterArray(arr){
//     return arr.filter(item => typeof item === 'number');
// }
function filterArray(arr){
    let newArr = []
for(let i = 0; i<arr.length; i++ ){
    if ( typeof arr[i] === 'number'){
        newArr.push(arr[i])
    }
}
return newArr
}

// filterArray([1, 2, "a", "b"]) ➞ [1, 2]

// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
console.log( filterArray([1, 2, "a", "b"]))
console.log( filterArray([1, "a", "b", 0, 15]))
console.log( filterArray([1, 2, "aasf", "1", "123", 123]))
console.log( filterArray([1 , 2 , 3 , 4 , 5]) )
