function textJustification(words, L) {
    var results = [];
    var counter = 0;
    var index = 0;
    // ["This", "is", "an", "example", "of", "text", "justification."]
    while (words.length > 0) {
        counter += words[index].length + 1;
        if (counter > L) {
            results.push(words.splice(0,index));
            counter = 0;
            index = 0;
        } else if (counter === L){
            results.push(words.splice(0, index + 1));
            counter = 0;
            index = 0;
        } else {
            index++;
        }
    }
    return results;
}
var steak = ["This", "is", "an", "example", "of", "text", "justification."];
console.log(textJustification(steak, 16));



