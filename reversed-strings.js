// Complete the solution so that it reverses the string value passed into it.
// solution('world'); // returns 'dlrow'

let solution = str =>  str.split('').map((name, i) =>  str.split('')[str.split('').length - (i+1)]).join('')

console.log(solution("рожа"))


