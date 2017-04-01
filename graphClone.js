/*

1. create visited hashTable
2. start at root
3. clone node
4. add to visited
5. iterate through root's children
    if child node is in the hash hashTable
        add to children of cloned node
    else
        recursively call function on child node then add to children of clone node

*/

const clone = (root) => {
    let visitedNode = {};
    return cloneGraph(root, visitedNode);
}

const cloneGraph = (root, visitedNode) => {
    if (!root) return null;
    let node = new clonedNode(root.data);
    visitedNode[root.data] = node;

    for (var i = 0; i < root.nearby.length; i++) {
        if (visitedNode[root.nearby[i].data]) {
            node.nearby.push(visitedNode[root.nearby[i]]);
        } else {
            node.nearby.push(cloneGraph(root.nearby[i], visitedNode));
        }
    }

    return node;


}

class clonedNode {
    constructor(data) {
        this.data = data,
        this.nearby = [];
    }
}
























// const clone = (root) => {
//     let vistedNode = {};
//     return cloneGraph(root, vistedNode);
// }

// const cloneGraph = (root, vistedNode) => {
//     if (!root) {
//         return null;
//     }
//     let newNode = new nodeClone(root.data);
//     vistedNode[root.data] = newNode;

//     for (let item in root.nearby) {
//         let visit = vistedNode[root.nearby[item].data];
//         if (!visit) {
//             newNode.nearby.push(cloneGraph(root.nearby[item] ,visitedNode));
//         } else {
//             newNode.nearby.push(visit);
//         }
//     }
//     return newNode;

// }

// class nodeClone {
//     contructor(data) {
//         this.data = data,
//         this.nearby = [];
//     }
// }

