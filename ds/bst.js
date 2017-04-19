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
                        break;
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
binarySearchTree.add(6)
binarySearchTree.add(7)
binarySearchTree.add(-1)



console.log(binarySearchTree.head.right.right)

console.log(binarySearchTree)

let array = ['p', 'e', 'r', 'f', 'e', 'c', 't', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e'] //3





// "e,c,i,t,c,a,r,p".reverse()  <- reverse this in place ?????

array.reverse()


function sentenceReverse(array) {
    let start = 0;
    let end;
    array.reverse()
    for (let i = 0; < array.length; i++) {
        if (array[i] == ' ') {
            end = i - 1;
            for (let j = start; j < end / 2; j++) {
                let temp = array[j]; // e
                array[j] = array[end] // p
                array[end - j] = temp // t
            }
            start = end + 1;
        }
    }
    // "perfetc practice"
    //        | <- start points here  i will point to end of array
    start == i - 1 ? // looked at all the words
}

return array;
}


// [1,2,3].shift() //1 => [2,3]
//['perfect', 'makes', practice']
//['practice, 'makes', perfect]
// 'practice makes perfect'
//what if you reverse the array in place ....