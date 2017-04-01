function wordLadder(beginWord, endWord, wordList) {
    var hashTable = hashing(beginWord.length, wordList);
    if (!hashTable.word.has(endWord)) return 0;
    
    var set1 = new Set();
    set1.add(beginWord);

    var set2 = new Set();
    set2.add(endWord)

    hashTable.word.delete(beginWord);
    hashTable.word.delete(endWord);

    return findRouteLength(set1, set2, hashTable, 2);
}

function findRouteLength(set1, set2, hashTable, length) {
    if (set1.size === 0)  return 0;
    var newSet = new Set();

    for (word of set1){
        for (var x = 0; x < word.length; x++) {
            for (letter of hashTable.letters[x]) {
                // construct new words from hashTable
                var newWord = word.slice(0, x) + letter + word.slice(x + 1, word.length)
                
                // return length when two paths meet 
                if (set2.has(newWord)) return length;

                // record traversal and update dictionary
                if (hashTable.word.has(newWord)) {
                    newSet.add(newWord);
                    hashTable.word.delete(newWord);
                }
                
            }
        }
    }

    if (newSet.size < set2.size) {
        // traverse from start
        return findRouteLength(newSet, set2, hashTable, length + 1);
    } else {
        // traverse from end
        return findRouteLength(set2, newSet, hashTable, length + 1);
    }
}

// return object of set of words, and sets of letter at each index
function hashing(wordLength, wordList) {
    var hashTable = {};
    hashTable.word = new Set();
    hashTable.letters = {}
    for (var i = 0; i < wordList.length; i++) {
        hashTable.word.add(wordList[i]);
        for (var j = 0; j < wordLength; j++) {
            var currentLetter = wordList[i][j];
            if (hashTable.letters[j]) {
                hashTable.letters[j].add(currentLetter);
            } else {
                hashTable.letters[j] = new Set();
                hashTable.letters[j].add(currentLetter);
            }
        }
    }
    return hashTable;
}

var steak = ["hot", "dot", "dog", "lot", "log", "cog"]
console.log(wordLadder('hit', 'cog', steak));
