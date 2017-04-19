let array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [16, 17, 18, 19, 20]
]






const spiralPrint = (array) => {
    let result = [];
    let top = 0;
    let bottom = array.length - 1;
    let left = 0;
    let right = array[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = top; i <= right; i++) {
            result.push(array[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result.push(array[i][right]);
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(array[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(array[i][left]);
            }
            left++;
        }
    }

    return result;
}

console.log(spiralPrint(array))

//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [16, 17, 18, 19, 20]