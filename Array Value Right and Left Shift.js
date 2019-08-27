// Array Value shift right and left based on the count
// write the function with shift position , count of the value , array list

let tmp = [1,2,3,4,5,6];

console.log(ShiftArrayValue('right', 2, tmp));

console.log(ShiftArrayValue('left', 2, tmp));

function ShiftArrayValue(ShiftPosition, Count, ArrayList) {
  let list = [...ArrayList];
  if(ShiftPosition==='right') {
    return [...list.slice(Count), ...list.slice(0,Count)];
  } else if(ShiftPosition==='left') {
    let tmp = list.splice(list.length-Count, list.length)
    return [...tmp, ...list];
  }
}
