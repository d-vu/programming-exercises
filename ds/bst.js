class BST {
    constructor() {
        this.head = new Node();
    }
    add(value) {
        if (!this.head.value) {
            this.head.value = value;
        } else {
            let currentNode = this.head;
            while (currentNode) {
                if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = new Node(value);
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    if (!currentNode.left) {
                        currentNode.left = new Node(value);
                    } else {
                        currentNode = currentNode.left;
                    }
                }
            }
        }
    }
    find() {

    }
    remove() {

    }
}

class Node {
    constructor(value) {
        value = value || null;
        this.value = value;
        this.left = null;
        this.right = null
    }
}

let binarySearchTree = new BST();
console.log('hi')
console.log(binarySearchTree)
binarySearchTree.add(5)
console.log(binarySearchTree)