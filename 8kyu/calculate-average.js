// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// first tryyyy
// function findAverage(array) {
//   if (array.length > 0) {
//     let avg = array.reduce((a, b) => a + b) / array.length;
//     return avg;
//   } else {
//     return 0;
//   }
// }

// simplified
function findAverage(array) {
  return array.length > 0 ? array.reduce((a, b) => a + b) / array.length : 0;
}