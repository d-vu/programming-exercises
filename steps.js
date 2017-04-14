// at each step see if I can do 1 or 2 steps
// if you land on n increase count
// else break

// 3 steps
// 1, 1, 1
// 1, 2,
// 2, 1

// n(2)
// n(1)

const steps = (n) => {
    let solutions = 0;
    let helper = (n) => { // 3
        if (n === 0) {
            solutions++;
        } else if (n < 0) {
            return;
        } else {
            helper(n - 1);
            helper(n - 2);
        }
    }
    helper(n);
    return solutions;
}


const steps2 = (n) => {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 0;
    } else {
        return steps2(n - 1) + steps2(n - 2);
    }
}


console.log(steps2(4));