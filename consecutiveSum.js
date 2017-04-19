let array1 = [1, -100, 3, 2, 500, 900000, -100000000, 5000000000];
let array2 = [-3, -1, -2, 5, 6000]



const consecutiveSum = (array) => {
    if (array.length === 1) return array[0];
    let maxSum = array[0];
    let potentialMax = array[0];

    for (var i = 1; i < array.length; i++) {
        potentialMax += array[i];
        if (maxSum < 0 && array[i] > maxSum) {
            maxSum = array[i]
        } else if (potentialMax > maxSum) {
            maxSum = potentialMax;
        } else if (potentialMax < 0) {
            potentialMax = 0;
        }
    }
    return maxSum;
}
console.log(consecutiveSum(array2))