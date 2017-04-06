class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    add(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    remove(value) {
        if(!this.head) return null;
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
            if (currentNode !== this.tail && currentNode.next.value === value ) {
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
    find (target) {
        if (!this.head) return false
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === target) {
                return true;
            } 
            currentNode = currentNode.next
        }
        return false;
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
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let LL = new LinkedList();
LL.add('1')
LL.add('2')
LL.add('3')
LL.add('4')
console.log(LL.head)
console.log(LL.tail)
console.log(LL.print())

console.log(LL.find('3'))

console.log(LL);