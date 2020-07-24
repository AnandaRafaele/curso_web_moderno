const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const mulher = funcionario => funcionario.genero === "F"
    const chinesa = mulher => mulher.pais === "China"
    const salarios = pessoa => pessoa.salario
    const menorSalario = (acc, cur) => Math.min(acc, cur)

    const resultado = funcionarios.filter(mulher).filter(chinesa).map(salarios).reduce(menorSalario)


    console.log(resultado)

}).catch(e => console.log(e))