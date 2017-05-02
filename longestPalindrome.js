const longestPalindrome = (string) => {
    let longestPalindrome;
    for (let i = 0; i < string.length - 1; i++) {
        for (let j = i + 1; j < string.length; j++) {
            let stringSection = string.substring(i, j + 1)
            if (isPalindrome(stringSection)){
                if (!longestPalindrome) longestPalindrome = stringSection;
                if (stringSection.length > longestPalindrome.length) {
                    longestPalindrome = stringSection;
                }
            }
        }
    }
    return longestPalindrome || false;
}

//tacocat

const isPalindrome = (string) => {
    let start = 0;
    let end = string.length - 1;
    while (start < end) {
        if (string[start] === string[end]) {
            start++
            end--;
        } else {
            return false;
        }
    }
    return true;
}

console.log(longestPalindrome('ABCDEFCBA'))