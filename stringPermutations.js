const permutation = (string) => {
    var result = []
    const helper = (string, prefix) => {
        if (string.length === 0) {
            result.push(prefix);
        } else {
            for (let i = 0; i < string.length; i++) {
                let rem = string.substring(0,i) + string.substring(i + 1);
                helper(rem, prefix + string[i]);
            }
        }
    }
    helper(string, '');
    return result;
}
E
console.log(permutation('abc'))