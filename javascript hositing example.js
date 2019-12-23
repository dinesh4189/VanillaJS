// how hoisting happens
var a;
console.log(a);
{
    a = 5;
    console.log(a);
    var a;
    console.log(a);
    a = 2;
    console.log(a);
}
console.log(a);
