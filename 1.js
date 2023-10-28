//Your task is to create a function which returns a random number in the given range of values both inclusive
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const random = Math.random();
  
    // Scale the random number to the desired range
    const scaledRandom = random * (rangeEnd - rangeStart) + rangeStart;
  
    // Round down to the nearest whole number
    const roundedRandom = Math.floor(scaledRandom);
  
    return roundedRandom;
  }
  
  // Example usage:
  const result = randomNumberGeneratorInRange(1, 10);
  console.log(result); // This will print a random number between 1 and 10 (inclusive).

  
 // another example
 function randomNumberGeneratorInRange(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

var randomNumber = randomNumberGeneratorInRange(10, 50);
console.log(randomNumber);