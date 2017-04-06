class hashTable {
    constructor(size) {
        this.storage = [];
        this.size = size;
    }
    set(key, value) {
        let index = this.hashing(key);
        this.storage[index] = value;
    }
    get(key) {
        let index = this.hashing(key);
        return this.storage[index];
    }
    hashing(key) {
        return key.length % this.size;
    }
}

var HT = new hashTable(10);
console.log(HT)
HT.set('red', 'angry'); 
console.log(HT.get('red'))