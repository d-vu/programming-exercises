class stackToQueue {
    constructor() {
        this.queue1 = [1,2,3]
        this.queue2 = []
    }
    push(value) {
        this.queue1.push(value);
    }
    pop() {
        let result;
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        result = this.queue1[0];
        this.queue1 = this.queue2;
        this.queue2 = []
        return result
    }
}

let steak = new stackToQueue()