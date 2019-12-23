//factorial(5)
// 5*4*3*2*1
// 5 * (5-1) * (5-2) * (5-3) * (5-4)

function factorial(n) {
    if(n==0 || n===1) {
        return 1;
    }
    return n * factorial(n-1);

}

console.log(factorial(5));
