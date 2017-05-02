const permutations = (input) => {
    let listOfPerm = new Set();

    let helper = (input, result) => {
        if (!input) {
            return listOfPerm.add(result);
        }

        for (let i = 0; i < input.length; i++) {
            let newInput = input.substring(0,i) + input.substring(i+1);
            helper(newInput, result + input[i]);
        }
    }
    helper(input, '');
    
    return [...listOfPerm];
}

console.log(permutations('aac'))

//'ab'
//'aa'
