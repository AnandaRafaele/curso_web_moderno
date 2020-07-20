function newWage(plan, wage) {
    switch (plan) {
        case "A":
            return wage + (wage*0.1)
        case "B":
            return wage + (wage*0.15)
        case "C":
            return wage + (wage*0.2)
        default:
            return "Plano inválido"
    }
}

console.log(newWage("A", 800))
console.log(newWage("B", 800))
console.log(newWage("C", 800))
console.log(newWage("D", 800))