let array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

const trappingWater = (array) => {
    let result = 0;
    let left = [];
    let right = [];
    let tempLeft = 0;
    let tempRight = 0


    for (let i = 0; i < array.length - 1; i ++) {
        left[i] = tempLeft;
        if (array[i] > tempLeft) tempLeft = array[i]
    }
    console.log(left)

    for (let i = array.length - 1; i >= 0; i--) {
        right[i] = tempRight;
        if (array[i] > tempRight) tempRight = array[i]
    }

    console.log(right)
   

    for (let i = 1; i < array.length - 1; i++) {
        let water = Math.min(left[i], right[i]) - array[i];
        if (water > 0) result += water;
    }


    return result;
}

console.log(trappingWater(array))