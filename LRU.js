class LRU {
    constructor(cacheSize) {
        this.cacheSize = cacheSize
        this.cache = [];
    }
    add(value) {
        let index = this.cache.indexOf(value);
        if (this.cache.length < this.cacheSize) {
            if (index < 0) {
                this.cache.push(value);
            }
        } else {
            if (index < 0) {
                this.cache.shift();
                this.cache.push(value);
            } else {
                this.cache.splice(index, 1);
                this.cache.push(value);
            }
        }
    }
}

let steak = new LRU(3);
steak.add(1)
steak.add(2)
steak.add(3)
steak.add(2)





console.log(steak.cache)