let cake = '1234 89 56 123'.split('');


const reverseWordArray = (cake) => {
    let start = 0;
    let end;
    cake.reverse(0, cake.length - 1, cake);
    for (let i = 0; i < cake.length; i++) {
        if (cake[i] === ' ') {
            end = i - 1;
            reverseWord(start, end, cake);
            start = end + 2;
        }
    }
    reverseWord(start, cake.length - 1, cake);
    return cake.join('');    
} 

const reverseWord = (start, end, cake) => {
    while(start < end) {
        let temp = cake[start];
        cake[start] = cake[end];
        cake[end] = temp;
        start++;
        end--;
    }
    // return cake
}
//98 65 321
console.log(reverseWordArray(cake))
console.log(reverseWord(0, cake.length - 1, cake))

