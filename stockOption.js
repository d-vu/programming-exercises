const stockOption = (array) => {
    let localMin = array[0];
    let localMax = array[0];

    let maxStockResult = 0;
    let localStockResult = 0;

    for (let i = 1; i < array.length; i++) {
        // new local min
        if (array[i] < localMin) {
            localMin = array[i];
            localMax = array[i];

        } else {
            if (array[i] > localMax) {
                localMax = array[i];
            }
            if ((localMax - localMin) > localStockResult) {
                localStockResult = (localMax - localMin);
            }
            if (localStockResult > maxStockResult) {
                maxStockResult = localStockResult;
            }
        }
    }
    return maxStockResult;
}

let array = [1,2,3,4,5]
console.log(stockOption(array));