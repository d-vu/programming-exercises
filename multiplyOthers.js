let array1 = [3, -1, 5, 2];
let array2 = [3, -1, 5, 0, 2];
let array3 = [0, 3, -1, 5, 0, 2];
// [3, -1, 5, 2] => [-10, 30, -6, -15]
// [3, -1, 5, 0, 2] => [0, 0, 0, -30, 0]
// [0, 3, -1, 5, 0, 2] => [0, 0, 0, 0, 0, 0]


// One 0's
// Two 0's




// [-1*5*2, 3*5*2, 3*-1*2, 3*-1*5/2]
const multipleOthers = (array) => {
    let numberOfZeroes = 0;
    let zeroIndex;
    let totalProduct = 1;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zeroIndex = i;
            numberOfZeroes++;
        } 
        else if (numberOfZeroes === 2) break;
        else totalProduct *= array[i];
    }
    if (numberOfZeroes > 0) {
        for (let i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        if (numberOfZeroes === 1) array[zeroIndex] = totalProduct;
    } else {
        for (let i = 0; i < array.length; i++) {
            array[i] = totalProduct / array[i];
        }  
    }
    return array;
}
console.log(multipleOthers(array3));

// [3, -1, 5, 2] => [-10, 30, -6, -15]
// [3, -1, 5, 0, 2] => [0, 0, 0, -30, 0]
// [0, 3, -1, 5, 0, 2] => [0, 0, 0, 0, 0, 0]