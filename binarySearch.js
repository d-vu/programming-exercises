const binarySearch = (array, target, left, right) => {
    left = left || 0;
    right = right || array.length - 1;
    let mid = Math.ceil((left + right) / 2);

    if (target === array[mid]) {
        return true;
    }
    if (left === right) {
        return false;
    }
    if (target > array[mid]) {
        return binarySearch(array, target, mid + 1, right);
    } else if (target < array[mid]) {
        return binarySearch(array, target, left, mid - 1);
    }
}

let array1 = [4,5,6,7,8,9,1,2,3];
let array2 = [-30,3,2,8];

// console.log(binarySearch(array1, 4)); // true
// console.log(binarySearch(array2, 4)); // false


// if target is less than middle point
    //check left half range
        // if out of range
            //search 2nd half
        // else search 1st half