// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// var arr = ["b", "s", 2, -2, 3];

// var positiveArr = arr.filter(function(number) {
//   return typeof number === "number"
// });

// console.log( positiveArr ); // 1,2,3


let filter_list = l => l.filter((number) => typeof number === "number")

  console.log( filter_list([1,2,'a','b']) ); // 1,2,3