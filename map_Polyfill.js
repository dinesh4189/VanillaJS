let a = {
    abc:{
        xyz:'hello'
    }
};

let b = {...a}; // 

//b.abc.xyz = 'hi';

// deep clone object
// value must be premitive and should not be array


/* var myCloneObj = function(obj) {
  var keys = Object.keys(obj);
  
  var newObj = () => {
    var newObj1 = {};
    console.log(keys);
    keys.forEach(prop=> {
      if(obj[prop] && typeof obj[prop] !== Array.isArray(obj[prop]) && typeof obj[prop] === 'object') {
        newObj[prop] = myCloneObj(obj[prop]);
      } else {
        newObj[prop] = obj[prop];
      }
    });
    return newObj1
  };
  
  return newObj;
}

var op = myCloneObj(a);
op.abc.xyz = 'hi';
console.log(a);
console.log(op); */

//[1,2,3].map(val=>val+1);


// map ployfill
Array.prototype.myMap = (callBack) => {
  var newArr = [];
  
  callBack(val, index, this){
    if(Array.isArray(this) && this.length > 0) {
      arr.forEach((val, index)=>newArr[index]=this[index]);
    }
  }
  return callBack;
}

console.log([1,2,3].myMap(val=> 1+1)); 
