(function (dia) {
    switch (dia) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return console.log("Dia útil")
        case 1:
        case 7:
            return console.log("Fim de semana")
        default:
            return console.log("Dia inválido")
    }
})(7)