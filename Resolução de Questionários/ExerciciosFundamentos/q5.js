const currencyFormat = value => console.log(`R$ ${value.toFixed(2).replace('.', ',')}`)

currencyFormat(0.50000000000004)