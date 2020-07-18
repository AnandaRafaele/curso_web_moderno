const jurosSimples = (capitalInicial, taxaDeJuros, tempoDeAplicação) => {
    return console.log(capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicação))
}

const jurosComposto = (capitalInicial, taxaDeJuros, tempoDeAplicação) => {
    return console.log(capitalInicial * Math.pow((taxaDeJuros + 1), tempoDeAplicação))
}

jurosSimples(100, 10/100, 2)
jurosComposto(100, 10/100, 2)