const reverseLinkedList = (LL) => {
    if (!LL.head || !LL.head.next) return LL;
    let reversedHead = LL.head;
    let currentHead = LL.head.next;
    reversedHead.next = null;
    console.log(currentHead)
    while (currentHead) {
        let temp = currentHead;
        currentHead.next = reversedHead;
        let currentHead = temp.next;
    }
    return LL;
}

let taco = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: null
            }
        }
    }
}
console.log(taco);
console.log(reverseLinkedList(taco))