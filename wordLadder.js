const wordLadder = (beginWord, endWord, wordList) => {
    const hashTable = hashing(wordList);
    if (!hashTable.wordSet.has(endWord)) return 0

    let set1 = new Set();
    set1.add(beginWord);

    let set2 = new Set();
    set2.add(endWord);

    hashTable.wordSet.delete(beginWord);
    hashTable.wordSet.delete(endWord);

    return findRouteLength(set1, set2, hashTable, 2)
}

const findRouteLength = (set1, set2, hashTable, length) => {
    if (set1.size === 0) return 0;
    let newSet = new Set();

    for (word of set1) {
        for (var x = 0; x < word.length; x++) {
            for (letterIndex of hashTable.letterIndex[x]) {
                let newWord = word.slice(0, x) + letterIndex + word.slice(x + 1, word.length);
                if (set2.has(newWord)) return length;
                if (hashTable.wordSet.has(newWord)) {
                    set1.add(newWord);
                    hashTable.wordSet.delete(newWord);
                }
            }
        }
    }

    if (newSet.size < set2.size) {
        return findRouteLength(newSet, set2, hashTable, length + 1)
    } else {
        return findRouteLength(set2, newSet, hashTable, length + 1)
    }
}

const hashing = (wordList) => {
    const hashTable = {
        wordSet: new Set(),
        letterIndex: {}
    }
    for (var i = 0; i < wordList.length; i++) {
        hashTable.wordSet.add(wordList[i]);
        for (var letterPosition = 0; letterPosition < wordList[i].length; letterPosition++) {
            if (!hashTable.letterIndex[i]) {
                hashTable.letterIndex[i] = new Set();
            }
            hashTable.letterIndex[i].add(wordList[i][letterPosition]);
        }
    }
    return hashTable
}

var steak = ["hot", "dot", "dog", "lot", "log", "cog"];
var cheese = hashing(steak);
console.log(wordLadder('hit', 'cog', steak))
