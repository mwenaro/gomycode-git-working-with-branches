// Create a function that takes a number as an argument 
// and returns true or false depending on whether the number is symmetrical or not.
//  A number is symmetrical when it is the same as its reverse.


// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true

function isSymmetrical(num) {
    let str=num.toString () ;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isSymmetrical(7227));
console.log(isSymmetrical(12567));
console.log(isSymmetrical(444444));
console.log(isSymmetrical(9939));
console.log(isSymmetrical(1112111));



 