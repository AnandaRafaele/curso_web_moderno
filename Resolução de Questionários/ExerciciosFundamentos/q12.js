(function(value) {
    let n = value
    let i = value - 1
    while (i > 1) {
        n *= i
        i--
    }

    console.log(n)
    
})(8)