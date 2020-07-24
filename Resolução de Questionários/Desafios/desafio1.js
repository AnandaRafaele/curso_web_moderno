const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.3, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true },
]

// Desafio 1 - Todos os alunos são bolsistas

const todosSaoBolsistas = alunos.map(aluno => aluno.bolsista).reduce((resultado, bolsista) => resultado && bolsista)

console.log(todosSaoBolsistas)

const algumBolsista = alunos.map(aluno => aluno.bolsista).reduce((resultado, bolsista) => resultado || bolsista)

console.log(algumBolsista)