{
  console.log(sayOtherName)
  console.log(sayOtherName())
  console.log(test());
  console.log(sayName())
  console.log(sayMyName())

  var sayName = () =>{
      console.log('hello world')
  }
  let sayMyName = () =>{
      console.log('keep Going')
  }
  function sayOtherName(){
      console.log('world is beautiful')
  }
  test = function() {
      console.log('test');
  }
}

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
