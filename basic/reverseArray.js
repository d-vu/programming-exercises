// [1,1,3,3,8,20,5] [1,3]

const duplicates = (array) => {
    let uniques = new Set();
    let duplicates = new Set();

    for (var i = 0; i < array.length; i++) {
        if (duplicates.has(array[i])) {

        } else if (uniques.has(array[i])) {
            uniques.delete(array[i]);
            duplicates.add(array[i]);
        } else {
            uniques.add(array[i]);
        }
    }
    return [...duplicates];
}


let duplicateArray = [1, 1, 3, 3, 8, 20, 5];
console.log(duplicates(duplicateArray));

const reverseArray = (array) => {
    let left = 0;
    let right = array.length - 1;

    while (left !== right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }
    return array
}
let array1 = [1,2,3,4,5]
console.log(reverseArray(array1)) // [5,4,3,2,1]

const isPalindrome = (string) => {
    let left = 0;
    let right = string.length - 1;
    while (left !== right) {
        if (string[left] !== string[right]) return false;
        left++;
        right--;
    }
    return true;
}
let palindromeString = 'aracecara';
console.log(isPalindrome(palindromeString)) // true


