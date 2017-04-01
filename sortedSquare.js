function sortedSquaredArray(array) {
    var results = [];
    if (array[0] >= 0) {
        array.forEach((number) => results.push(number * number));
    } else if (array[array.length - 1] < 0) {
        for (var i = array.length - 1; i >= 0; i--) {
            results.push(array[i] * array[i]);
        }
    } else {
        var leftPointer;
        var rightPointer
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] + array[i + 1] > array[i]) {
                leftPointer = i;
                rightPointer = i + 1;
                break;
            }
        }
        while (leftPointer >= 0 || rightPointer < array.length) {
            var leftValue = array[leftPointer] * array[leftPointer];
            var rightValue = array[rightPointer] * array[rightPointer];
            if (leftValue <= rightValue || !rightValue) {
                results.push(leftValue)
                leftPointer--;
            } else if (leftValue > rightValue || !leftValue) {
                results.push(rightValue);
                rightPointer++;
            }
        }
    }
    return results;
}


var steak = [-6, 2, 5]; // [4, 25, 36]

function sortedSquaredArray(array) {
    var output = [],
        a = 0,
        b = array.length - 1;
    for (var i = array.length - 1; i >= 0; i--) {
        var n = array[-array[a] > array[b] ? a++ : b--];
        output[i] = n * n;
    }
    return output;
}

