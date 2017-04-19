class fastHashTable {
    constructor() {
        this.hashTable = {};
        this.keys = [];
        this.length = 0;
    }
    insert(key, value) {
        let index = this.length;
        this.hashTable[key] = [value, index];
        this.length++;
        this.keys.push(key);
    }
    delete(key) {
        let index = this.hashTable[key[1]];
        let temp = this.keys[index];
        this.keys[index] = this.keys[this.length - 1];
        this.length--;

        delete this.hashTable[key];
    }
    get(key) {
        if (this.table[key]){
            return this.table[key[0]];
        } else {
            return null;
        }
    }
    getRandom() {

    }
}