const minimum = function (a, b) {
    if (a < b) {
        return a
    }
    else if (a > b) {
        return b
    }
    else {return a}
}

console.log(minimum(0, 10))
console.log(minimum(0, -10))