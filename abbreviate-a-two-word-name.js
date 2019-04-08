// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

let abbrevName = name => name.slice(0,1) + "." + (name.slice(name.indexOf(" ") + 1, name.indexOf(" ") + 2)).toUpperCase();



console.log(abbrevName("Lupa Pupa"));