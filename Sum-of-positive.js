// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

let positiveSum = arr => result = arr.filter((number) => number > 0).reduce((sum, current) => {return sum + current}, 0);



console.log(positiveSum([]));