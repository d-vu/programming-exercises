const pathShortner = (path, limit) => {
    if (path.length < limit) return path;
    let results = [];
    let tokens = path.split('/');
    results.push(tokens[0]);
    let spaceAvaiable = limit - (tokens[0].length + tokens[tokens.length-1].length + 4);

    if (spaceAvaiable > 0) {
        for (let i = 1; i < tokens.length - 2; i++) {
            if (tokens[i].length + 1 <= spaceAvaiable) {
                results.push(tokens[i]);
                spaceAvaiable -= tokens[i].length;
            } else {
                results.push('...');
                break;
            }
        }
    } else {
        results.push('...');
    }
    results.push(tokens[tokens.length - 1]);

    return results.join('/');

}

let string = 'c:/a/bcadf/13333333333333333323423432/abc/text.exe'
// c:/.../text.exe

console.log(pathShortner(string, 40));
