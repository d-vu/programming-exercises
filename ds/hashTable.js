class hashTable {
    constructor(size) {
        this.storage = [];
        this.size = size;
    }
    set(key, value) {
        let index = this.hashing(key);
        if (!this.storage[index]) {
            this.storage[index] = new LinkedList();
        }
        this.storage[index].add(key, value)
    }
    get(key) {
        let index = this.hashing(key);
        return this.storage[index].find(key);
    }
    hashing(key) {
        return key.length % this.size;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    add(key, value) {
        let newNode = new Node(key, value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    remove(value) {
        if (!this.head) return null;
        if (this.head.value === value) {
            if (this.head === this.tail) {
                this.tail = null;
                this.head = null;
            } else {
                this.head = this.head.next;
            }
        }
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.next)
            if (currentNode !== this.tail && currentNode.next.value === value) {
                if (currentNode.next === this.tail) {
                    currentNode.next = null;
                    this.tail = currentNode;
                } else {
                    currentNode.next = currentNode.next.next;
                }
            }
            currentNode = currentNode.next;
        }
    }
    find(target) {
        if (!this.head) return null
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.key === target) {
                return currentNode.value;
            }
            currentNode = currentNode.next
        }
        return null;
    }
    print() {
        let result = [];
        let currentNode = this.head;
        while (currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return result;
    }
}

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

var HT = new hashTable(10);
HT.set('red', 'angry'); 
HT.set('abc', 'blue'); 
console.log(HT.get('red'))
console.log(HT.get('abc'))



console.log(HT.storage)


