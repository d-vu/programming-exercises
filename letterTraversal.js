let letterGrid = [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', 'i', 'j'],
    ['k', 'l', 'm', 'n', 'o'],
    ['p', 'q', 'r', 's', 't'],
    ['u', 'v', 'w', 'x', 'y'],
    ['z']
]

const letterTraversal = (start, finish, letterGrid) => {
    let result = '';
    let startAscii = start.charCodeAt(0) - 97;
    let finishAscii = finish.charCodeAt(0) - 97;

    // moving left and right
    let column = startAscii % 5 - finishAscii % 5;
        
    // moving up and down
    let row = (Math.ceil(startAscii/5) - Math.ceil(finishAscii/5)) - 1;
 
    for (let i = 0; i < Math.abs(column); i++) {
        if (column < 0) result += 'R';
        else result += 'L'
    }

    for (let i = 0; i < Math.abs(row); i++) {
        if (row < 0) result += 'D';
        else result += 'U'
    }

    return result
}

console.log(letterTraversal('o', 'f', letterGrid));
// expect LLLLU or ULLLL
