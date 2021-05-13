var varUndefined;
var varNull = null;
var varStr = 'asd';
var varNum = 10101.10
var varBoo = true;
var varObj = new Object();
var varArr = new Array();

typeofDataType(varUndefined);
typeofDataType(varNull);
typeofDataType(varStr);
typeofDataType(varNum);
typeofDataType(varBoo);
typeofDataType(varObj);
typeofDataType(varArr);

constructorDataType(varUndefined);
constructorDataType(varNull);
constructorDataType(varStr);
constructorDataType(varNum);
constructorDataType(varBoo);
constructorDataType(varObj);
constructorDataType(varArr);


function constructorDataType(testVariable) {
  
    if( !testVariable && testVariable===null) {
        console.log('Value is null');
    } else if(!testVariable && testVariable===undefined) {
        console.log('Value is not defined');
    } else if (testVariable.constructor === String || 
                testVariable.constructor === Number || 
                testVariable.constructor === Boolean || 
                testVariable.constructor === Object || 
                testVariable.constructor === Array) {
        console.log('Constructor type is '+ testVariable.constructor.toString())
    }
}


function typeofDataType(testVariable) {
    if (typeof testVariable === 'null' || 
        typeof testVariable === 'undefined' || 
        typeof testVariable === 'string' || 
        typeof testVariable === 'number' || 
        typeof testVariable === 'boolean' || 
        typeof testVariable === 'object') {
           if( typeof testVariable === 'object' && Array.isArray(testVariable)) {
             console.log('Data type is Array')
           } else {
             console.log('Data type is '+ typeof testVariable)
           }
    }
}


