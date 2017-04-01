function mult(strNum1, strNum2) {

    var a1 = strNum1.split("").reverse();
    var a2 = strNum2.split("").reverse();
    var aResult = new Array;

    for (var iterNum1 = 0; iterNum1 < a1.length; iterNum1++) {
        for (var iterNum2 = 0; iterNum2 < a2.length; iterNum2++) {
            var idxIter = iterNum1 + iterNum2;
            var multiply = a1[iterNum1] * a2[iterNum2]
            var someCheck = (idxIter >= aResult.length ? 0 : aResult[idxIter])    // Get the current array position.
            aResult[idxIter] =  multiply + someCheck;

            if (aResult[idxIter] > 9) {    // Carrying
                aResult[idxIter + 1] = Math.floor(aResult[idxIter] / 10) + (idxIter + 1 >= aResult.length ? 0 : aResult[idxIter + 1]);
                aResult[idxIter] -= Math.floor(aResult[idxIter] / 10) * 10;
            }
        }
    }
    return aResult.reverse().join("");
}


console.log(mult('15', '5'))