// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s) {
    arr = s.split(' ');
    j = arr[0].length;
    for (i = 0; i < arr.length; i++) {
            if (arr[i].length < j ) {
                j = arr[i].length
            }
    }
    return j;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


