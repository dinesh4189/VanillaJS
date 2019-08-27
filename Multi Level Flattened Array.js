// Multi Level Flattened Array

let arr = [1,2,3, 'name', true, null, undefined, {fName: 'Dinesh'}, [4,5,false, null, undefined, {}, [,6,7,8, false, null, undefined, 'last name']]];

let setFlattenedValue = [];

CheckDataType(arr);

console.log(setFlattenedValue);

function CheckDataType(ArrayList) {
  DataLoop(ArrayList);
}

function DataLoop(List) {
   List.forEach((item) => {
     SetDataType(item);
   });
}

function SetDataType(value) {
   if(typeof value === 'object' && Array.isArray(value)) {
    DataLoop(value);
   } else {
    setFlattenedValue.push(value);
   }
}
