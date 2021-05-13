{
    function solution(inputA=[]) {
    // write your code in JavaScript (Node.js 8.9.4)
    // method 1
    // [2,4,1,6,5,9,7]
    // [[2,4,1]-(1,4), [6,5]-min(5,6), [9,7](7,9)]
    // 1,2,4 - 5,6 - 7,9
    // meethod 2
    // [2,1,6,4,3,7]
    // [1,2,4,6,3,7] => 1,2,3,4,6,7 
    // [[1,2], [4,6], [3,7]] 1,2,3
    // check min value
    // 2,4, - 1,6 - 5,9
    if(inputA.length>5){
        const split = (inputA.length%2)===0 ? 2 : 3;
        const devA = [];
        let sortArray = [];
    
        for(let i=1;i<=inputA.length/2; i++){
            if((inputA.length%2)===0) {
                devA.push((inputA.slice((i==1?0:((i-1)*2)),(i*2))));
            } else {
                if(i===1){
                    devA.push((inputA.slice(0,((i*2)+1))));
                } else{
                    const cond1 = ((i*2)+1)-2;
                    const cond2 = ((i*2)+1);
                    devA.push((inputA.slice(cond1, cond2)));
                }
            }
            sortArray = [...sortArray,...devA[i-1]];
        }
        console.log('-----> '+ parseInt(inputA.length/2));
        return parseInt(inputA.length/2);
    } else {
        return 1;
    }
    
}

solution([2, 4, 1, 6, 5, 9, 7]);
}
