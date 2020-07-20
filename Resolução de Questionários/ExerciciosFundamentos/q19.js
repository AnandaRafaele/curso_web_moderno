const menu = [
    { cod: 100, desc: "Cachorro Quente", preco: 3 },
    { cod: 200, desc: "Hambúrguer Simples ", preco: 4 },
    { cod: 300, desc: "Cheeseburguer", preco: 5.5 },
    { cod: 400, desc: "Bauru", preco: 7.5 },
    { cod: 500, desc: "Refrigerante", preco: 3.5 },
    { cod: 600, desc: "Suco", preco: 2.8 },
]

function cart_value(cod, qnt = 1) {
    switch (cod) {
        case 100: return 3 * qnt
        case 200: return 4 * qnt
        case 300: return 5.5 * qnt
        case 400: return 7.5 * qnt
        case 500: return 3.5 * qnt
        case 600: return 2.8 * qnt
        default: return "Produto Inválido!";
    }
}

console.log(cart_value(100, 2))
console.log(cart_value(200, 2))
console.log(cart_value(300, 2))
console.log(cart_value(400, 2))
console.log(cart_value(500, 2))
console.log(cart_value(600, 2))
console.log(cart_value(700, 2))