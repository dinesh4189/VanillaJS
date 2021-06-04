{

    let sampleArr = [1,2,3,4,5,6,7,8,9,10];
    let sampleArr1 = [1,2,3,4,5,6,7,8,9,10];

    Array.prototype.mySlice = function(...args) {
        var arr = this;
        var finalArr = [];
        var start = Math.abs(args[0]) || 0;
        var end = Math.abs(args[1]);
        
        function executionAndReturn(begin, finish) {
            let result = [];
            for(var i=begin; i < finish; i++) {
                result.push(arr[i]);
            }
            finalArr = result;
        };
         
        function innerFun() {
            executionAndReturn(start, arr.length);
            if (end && 0 <= start && start <= end && arr.length >= end) {
                executionAndReturn(start, end);
            }
            return finalArr;
        };
        return innerFun();
    }

    console.log('Actual sampleArr   -> ' + sampleArr);
    console.log('Actual sampleArr1  -> ' + sampleArr1);
    console.log('Actual slice(1)    -> '+ sampleArr.slice(1));
    console.log('Own mySlice(1)     -> ' +sampleArr1.mySlice(1));
    console.log('Actual slice(2,8)  -> ' + sampleArr.slice(2, 8));
    console.log('Own mySlice(2,8)   -> ' +sampleArr1.mySlice(2,8));
    console.log('Actual slice(-5)   -> ' + sampleArr.slice(-5));
    console.log('Own mySlice(-5)    -> ' +sampleArr1.mySlice(-5));
    console.log('Actual slice()     -> ' + sampleArr.slice());
    console.log('Own mySlice()      -> ' +sampleArr1.mySlice());

}
