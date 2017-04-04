let islandPerimeter = (island) => {
    let rowLength = island.length;
    let columnLength = island[0].length;
    let result = 0;

    for (var i = 0; i < rowLength; i++) {
        for (var j = 0; j < columnLength; j++) {
            if (island[i][j] === 1) {
                result += getPerimeter(i, j, island);
            }
        }
    }
    return result;
}

let getPerimeter = (i, j, island) => {
    let perimeter = 4;

    if (i - 1 >= 0 && island[i - 1][j] === 1) perimeter--;
    if (i + 1 < island.length && island[i + 1][j] === 1) perimeter--;
    if (j - 1 >= 0 && island[i][j - 1] === 1) perimeter--;
    if (j + 1 < island[0].length && island[i][j + 1] === 1) perimeter--;

    return perimeter
}

var steak = [[0, 1, 0, 0],
[1, 1, 1, 0],
[0, 1, 0, 0],
[1, 1, 0, 0]];

console.log(islandPerimeter(steak));