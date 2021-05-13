// amma, appa, malayalam, tattarrattat
var name = 'amma';
var check = name.split('').reverse().join('');
console.log(check===name ? `string is palindrom`: `string not palindrom`);

// 

function palindrome(str) {
  return str.split('').every((char, i) => {
    console.log(char, str[str.length - i - 1]);
    return char === str[str.length - i - 1];
  });
}


console.log(palindrome(name));
