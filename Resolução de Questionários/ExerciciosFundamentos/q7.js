const bhaskara = (a, b, c) => {
    const delta = (b ** 2) - 4 * a * c
    console.log(delta)
    if (delta === 0) {
        return console.log("Delta é negativo")
    }

    const resultado = [(-b + Math.sqrt(delta)) / 2 * a, (-b - Math.sqrt(delta)) / 2 * a]

    return console.log(resultado)
}

bhaskara(1, -1, -6)