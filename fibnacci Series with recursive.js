// 6
// result [0, 1, 1, 2, 3, 5]

function testFn(n){
    if(n===0 || n===1) {
        return n;
    }
    return testFn(n-1)+testFn(n-2);
}

function getArr(m){
    const result = [];
    for(var i = 0; i<m; i++) {
        result.push(testFn(i));
    }
    return result;
}

getArr(6);
