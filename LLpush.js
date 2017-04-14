class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



const push = (linkedList, value) => {
    console.log(linkedList)
    
    if (linkedList === null) {
        linkedList = {};
    }
    if (!linkedList.head) {
        
        let newNode = new Node(value);
        linkedList.head = newNode;
        linkedList.tail = newNode;
    } else {
        let newHead = new Node(value);
        newHead.next = linkedList.head;
        linkedList.head = newHead;
    }
    return linkedList
    console.log(linkedList)
}

var chained = null;
push(chained, 3)
// push(chained, 4)



console.log(chained)
