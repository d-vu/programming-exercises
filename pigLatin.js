const pigLatin = (string) => {
    let output = ''
    let arrayOfWords = string.split(' ');
    //[Pig, Latin...]
    for (let i = 0; i < arrayOfWords.length; i++) {
        arrayOfWords[i] = arrayOfWords[i].slice(1) + arrayOfWords[i][0] + 'ay';
    }
    //[igPay, atinlay....
    for (let i = 0; i < arrayOfWords.length - 1; i++) {
        output += arrayOfWords[i] + ' ';
    }
    console.log(output)
    output += arrayOfWords[arrayOfWords.length - 1];
    console.log(output)
    
    return output;
} 

console.log(pigLatin('Pig latin is cool'))