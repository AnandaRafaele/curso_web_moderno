function porExtenso(value) {
    switch (value) {
        case 0: return "zero"
        case 1: return "um"
        case 2: return "dois"
        case 3: return "tres"
        case 4: return "quatro"
        case 5: return "cinco"
        case 6: return "seis"
        case 7: return "sete"
        case 8: return "oito"
        case 9: return "nove"
        case 10: return "dez"
        default:
            return "Número fora do intervalo."
    }
}

console.log(porExtenso(0))
console.log(porExtenso(1))
console.log(porExtenso(2))
console.log(porExtenso(3))
console.log(porExtenso(4))
console.log(porExtenso(5))
console.log(porExtenso(6))
console.log(porExtenso(7))
console.log(porExtenso(8))
console.log(porExtenso(9))
console.log(porExtenso(10))
console.log(porExtenso(11))