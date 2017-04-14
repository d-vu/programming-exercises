let landArray = [
    [0, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 1, 1]
]

// expect 3
const numberOfLands = (landArray) => {
    let result = 0;
    let rows = landArray.length;
    let cols = landArray[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (landArray[i][j] === 1) {
                result++;
                updateLandArray(i, j, landArray);
            }
        }
    }
    return result;
}

const updateLandArray = (row, column, landArray) => {
    if (column >= 0 && column < landArray[0].length && row >= 0 && row < landArray.length && landArray[row][column] === 1) {
        landArray[row][column] = 0;
        updateLandArray(row, column - 1, landArray)
        updateLandArray(row, column + 1, landArray)
        updateLandArray(row + 1, column, landArray)
        updateLandArray(row - 1, column, landArray)
    }
}

console.log(numberOfLands(landArray))