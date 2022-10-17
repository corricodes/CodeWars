// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// // first tryyy
function solution(str) {
  return str === "" ? "" : solution(str.substr(1)) + str.charAt(0);
}
solution("kitty");

// // simpler
function solution(str) {
  return str.split("").reverse().join("");
}

// using spread operator
const solution = (s) => [...s].reverse().join("");