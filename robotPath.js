// let array = [
//     [0, 0, 0, 1],
//     [0, 1, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0]
// ];

let array =
[
    [0,0],
    [0,0]
]

const robotPath = (grid, row, column, memo) => {
    row = row || 0;
    column = column || 0;
    memo = memo || [[],[],[],[],[]];
    if (notValid(row, column, grid)) return 0;
    if (atFinish(row,column,grid)) return 1;
    if (memo[row] && memo[row][column]) {
        return memo[row][column];
    } else {
        memo[row][column] = robotPath(grid, row + 1, column, memo) + robotPath(grid, row, column + 1, memo);
        return memo[row][column];
    }
}

const notValid = (row, col, grid) => {
    return (row < 0 || row > grid.length - 1 || col < 0 || col > grid[0].length - 1 || grid[row][col] === 1)
}

const atFinish = (row, col, grid) => {
    return (row === grid.length-1 && col === grid[0].length - 1);
}

console.log(robotPath(array));

// let array2 = [
//     [0, 0, 0, 1],
//     [0, 1, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0]
// ];

let array2 =
    [
        [0, 0],
        [0, 0]
    ]

const robotPath2 = (grid) => {
    let result = 0;
    const move = (row, column, grid) => {
        if (notValid(row, column, grid)) { 
            return 0;
        } else if (atFinish(row,column,grid)) {
            return 1;
        } else {
            grid[row][column] = 1;
            result += 
            (
            move(row, column + 1, grid) +  
            move(row + 1, column, grid) + 
            move(row - 1, column, grid) +  
            move(row, column - 1, grid)
            );

            grid[row][column] = 0;
            
        }
    }
    const notValid = (row, col, grid) => {
        return (row < 0 || row > grid.length - 1 || col < 0 || col > grid[0].length - 1 || grid[row][col] === 1)
    }
    const atFinish = (row, col, grid) => {
        return (row === grid.length - 1 && col === grid[0].length - 1);
    }
    move(0,0, grid);
    return result;
}

console.log(robotPath2(array2))