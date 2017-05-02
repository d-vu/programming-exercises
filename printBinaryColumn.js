const printBinaryColumn = (root) => {
    let helper = (root, hashTable, column) => {
        if (!root) return;
        column = column || 0;
        if (!hashTable[column]) hashTable[column] = [];
        hashTable[column].push(root.value);
        helper(root.left, hashTable, column - 1);
        helper(root.right, hashTable, column + 1);
    }
    for (var key in hashTable){
        for (let i = 0; i < hashTable[key].length; i++) {
            console.log(key[i]);
        }
    }
}
