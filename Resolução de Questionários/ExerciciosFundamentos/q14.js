function supermarket (frukt) {
    switch (frukt) {
        case "maçâ":
            return "Não vendemos esta fruta aqui."
        case "kiwi":
            return "Estamos com escassez de kiwis."
        case "melancia":
            return "Aqui está, são 3 reais o quilo."
    
        default:
            return("Desculpe, não entendi!")
    }
}

console.log(supermarket("maçâ"))
console.log(supermarket("kiwi"))
console.log(supermarket("melancia"))
console.log(supermarket("manga"))