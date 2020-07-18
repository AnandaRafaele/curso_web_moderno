const whichTriangule = (l1, l2, l3) => {
    if (l1 === l2 && l2 === l3 && l3 === l1) return console.log("Triângulo Equilátero.")
    if (l1 === l2 || l2 === l3 || l3 === l1) return console.log("Triângulo Isoceles.")
    else return console.log("Triangulo Escaleno")
}

whichTriangule(2, 2, 2)