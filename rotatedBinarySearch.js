// if target is less than middle point
    //check left half range
        // if out of range
            //search 2nd half
        // else search 1st half


const rbs = (array, target, left, right) => {
    left = left || 0;
    right = right || array.length - 1;
    mid = Math.ceil((left + right) / 2);

    if (target === array[mid]) return mid;
    if (target === array[left]) return left;
    if (target === array[right]) return right;
    
    if (left === right) {
        return false;
    }


    if (target < array[mid] && target > left ) {
        return rbs(array, target, left + 1 , mid - 1);
    } else {
        return rbs(array, target, mid + 1, right - 1);
    }

}

let array1 = [400,500,620,750,8900,9000,-1000,220,350]; // 6

console.log(rbs(array1, 620));