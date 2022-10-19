// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// first tryyyy
function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// simplified
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}

// one liner w/ arrow function
const even_or_odd = (n) => (n % 2 ? "Odd" : "Even");