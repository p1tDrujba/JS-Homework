// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

function maskify(cc) {
    arr = cc.split('');
    let lastfour = arr.splice(-4);
    let newother = arr.slice(0,(arr.length)).map(item => item = "#")
    return (newother.join('') + lastfour.join(''))
}

console.log(maskify("164607935616"));