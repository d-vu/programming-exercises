// let taco = [1, 5, 8, 9, 10, 17, 17, 20];

// let rodLength = (prices, length) => {
//     let memo = []
//     let worker = (length, price = 0) => {
//         if (length <= 0) return 0;
//         let maxValue = -1;
//         for (let i = 0; i < taco.length; i++) {
//             maxValue = Math.max(maxValue, taco[i] + worker(length - (i + 1), taco[i]));
//             console.log(maxValue)
//             return maxValue
//         }
//     }
//     return worker(length);
// }
// console.log(rodLength(taco, 8));

// let profit = (value, length, memo = []) => {
//     if (length <= 0) return 0;
//     let max = -1; 
//     for (let i = 0; i < length; i++) {
//         max = Math.max(max, value[i] + profit(value, length - (i + 1)));
//     }
//     return max;
// }

// console.log(profit(taco, 8))
let taco = [1, 5, 8, 9, 10, 17, 17, 20];
let profit = (value, length, memo) => {
    memo = memo || []
    if (length <= 0) return 0;
    if (memo[length] >= 0) {
        return memo[length];
    }
    let max = -1;
    for (let i = 0; i < length; i++) {
        max = Math.max(max, value[i] + profit(value, length - (i + 1)), memo);
    }
    let cat = 0;
    return memo[length] = max;
}


console.log(profit(taco, 8))
