class trie {
    constructor() {
        this.root = {}
    }
    add(word) {
        let currentNode = this.root;
        for (var i = 0; i < word.length; i++) {
            if (!(word[i] in currentNode)) {
                currentNode[word[i]] = {};
            }
            currentNode = currentNode[word[i]]
        }
        currentNode.isWord = true;
    }
    hasWord(word) {
        let currentNode = this.root;
        for (var i = 0; i < word.length; i++) {
            if (!(word[i] in currentNode)) {
                return false
            }
            currentNode = currentNode[word[i]]
        }
        return currentNode.isWord === true;
    }
    
    
}

var bob = new trie();
bob.add('cat');
bob.add('catch');
console.log(bob.hasWord('catc'));