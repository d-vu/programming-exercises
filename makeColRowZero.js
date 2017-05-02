let makeZero = (matrix) => {
    let zeroRows = new Set();
    let zeroCol = new Set();

    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                if (!zeroRows.has(i)) {
                    zeroRows.add(i);
                }
                if (!zeroCol.has(j)) {
                    zeroCol.add(j);
                }
            }
        }
    }
    zeroRows.forEach((row) => {
        for (let i = 0; i < cols; i++) {
            matrix[row][i] = 0;
        }
    })

    zeroCol.forEach((col) => {
        console.log(col)
        for (let i = 0; i < rows; i++) {
            matrix[i][col] = 0;
        }
    })
    return matrix;
}

let matrix = [
    [0,1,3,4],
    [1,3,2,3],
    [2,0,1,5]
]

console.log(makeZero(matrix));