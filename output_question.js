{
    {
        // task 1
        for(let i=0;i<=5;i++) {
            setTimeout(()=>{
                console.log(i); 
            },3000); 
        }
        // output
    }
    {
        // task 2
        console.log(1<2<3);
        console.log(1>2>3);
    }
    {
        // task 3
        console.log([1,2,3,4,5]+[6,7,8,9,10]);   
    }
    {
        // task 4
        A();
        B();
        function A() {
            console.log('A');
        }
        function B() {
            console.log('B');
        }
    }
    {
        // task 5
        function xyz(y){
            console.log('outter Y '+ y);
            return function(x){
                console.log('1 inner Y '+ y);
                y=x;
                console.log('2 inner Y '+ y);
                return y;
            }
        }
        let sam = xyz(10);
        console.log(sam(9));
    }
    {
        
    }
}
