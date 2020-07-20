const notasPorJogo = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
// const notasPorJogo = "10, 20, 20, 8, 25, 3, 0, 30, 1"
// const notasPorJogo = [10, 20, 20, 8, 25, 3, 0, 30, 1]
let mai = []

function avaliaNotas(string) {
    const notas = string.split(", ")
    let record = notas[0]
    let maiorMenor = [0, notas[0]]

    notas.filter((nota, i) => {
        nota = parseInt(nota)
        if (record < nota) {
            maiorMenor[0]++
            record = nota
        }
        if (maiorMenor[1] > nota) maiorMenor[1] = i - 1
    })

    return maiorMenor
}

console.log(avaliaNotas(notasPorJogo))
