const divisao = (dividendo, divisor) => {
    const resultado = Math.floor(dividendo / divisor)
    const resto = dividendo % divisor

    console.log("Resultado: ", resultado, ". Resto: ", resto)
}

divisao(10, 3)