var longestPalindrome = function (string) {
    var longest = '';
    for (var i = 0; i < string.length; i++) {
        // quick reference to the current letter in the string
        var currentLetter = string[i];
        // find the last occurance of the letter in the string
        var firstOccurance;
        for (var j = i + 1; j < string.length; j++) {
            if (currentLetter === string[j]) {
                // we found an occurance that matches the current letter
                firstOccurance = j;
                // generate the substring to match
                var subString = string.slice(i, firstOccurance + 1);
                // check if the substring is a palindrom and if it is longer then longest
                if (subString.length > longest.length &&
                    subString.toLowerCase() === subString.split('').reverse().join('').toLowerCase()) {
                    longest = subString;
                }
            }
        }
    }
    // return the longest palindrome
    return longest;
};