let steak = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
}

let swap = (object) => {
    for (let key in object) {
        let temp = key;
        key = object[key];
        object[key] = temp
    }
    return object;
}

let stringCombo = (string) => {
    let result = 0;
    let dict = swap(steak);
    let helper = (cake) => {
        if (cake.length === 0) {
            result++;
            return;
        }
        if (cake.length >= 2 && dict[cake[0] + cake[1]]) {
            helper(cake.substring(2));
        }
        helper(cake.substring(1));
    }
    helper(string)
    console.log(result)
    return result
}

console.log(stringCombo('56'))
//4137 2
//212121 //6
