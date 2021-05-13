{
    let inputA = [4,3,2,6,1,5,7];
    const split = (inputA.length%2)===0 ? 2 : 3;
    const devA = [];
    let sortArray = [];
    for(let i=1;i<=inputA.length/2; i++){
        if((inputA.length%2)===0) {
            devA.push((inputA.slice((i==1?0:((i-1)*2)),i*2)));
        } else {
            if(i===1) {
                devA.push((inputA.slice(0,((i*2)+1))));
            } else{
                const t1 = ((i*2)+1)-2;
                const t2 = ((i*2)+1);
                devA.push((inputA.slice(t1, t2)));
            }
        }
        sortArray = [...sortArray ,...devA[i-1]];
    }

    console.log(devA.length);
    console.log(sortArray.sort());
}
