// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// // countTrue([]) ➞ 0

// function countTrue(arr){
//     return arr.filter(item => item === true).length
// }

function countTrue(arr){
    let counter = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] === true){
            counter++
        }
    }
    return counter
}

console.log(countTrue([true, false, false, true, false])); //espect 2
console.log(countTrue([false, false, false, false]))//0
console.log(countTrue([]))//0

