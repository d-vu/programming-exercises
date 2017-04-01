const decToBinary = (number) => {
    var result = ''
    while (number >= 1) {
        if (number % 2 === 1) {
            result = '1' + result
        } else {
            result = '0' + result
        }
        number = Math.floor(number / 2);
    }
    return result
}

console.log(decToBinary(1337));
console.log(6 + 5 + 4 + 3 + 1)
