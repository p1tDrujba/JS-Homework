// Create a function (or write a script in Shell) 
// that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


let jopa = (x) => {
    if (x % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

console.log(jopa(5));