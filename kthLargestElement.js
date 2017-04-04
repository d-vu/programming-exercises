function kthLargestElement(nums, k) {
    var resultArray = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < k; j++) {
            if (!resultArray[j]) {
                resultArray[j] = nums[i];
                break;
            } else {
                if (nums[i] > resultArray[j]) {
                    if ( resultArray.length >= k){
                        resultArray.pop();
                    }
                    resultArray.splice(j, 0, nums[i]);
                    break;
                }
            }
        }
    }
    return resultArray[k - 1];
}

// 10,9,9,9

var steak = [-100, 50, 300, 20, 90, 50, 1000, -9000];
console.log(kthLargestElement(steak, 8));


/*

10
8
6
4
____________________

*/
