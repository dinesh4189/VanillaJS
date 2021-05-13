// Method 1

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// Method 2

// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// Method 3

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

var str = '  a df';
console.log(str);
console.log(reverse(str));
