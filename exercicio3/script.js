// frase 

`Jorge tem uma casa verde e com portão azul, com os dizeres:
 "BOAS VINDAS, mas não deixe o gato sair`
//a)
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: \n"BOAS VINDAS, mas não deixe o gato sair"'
 
const fraseExercicio = () => {
    //b)
    const fraseMudaPalavra = frase.replaceAll('verde','rosa').replaceAll('azul','laranja')
    console.log(fraseMudaPalavra)
    //c)
    const incluiVerde = fraseMudaPalavra.includes('verde')
    const incluiLaranja = fraseMudaPalavra.includes('laranja')
    console.log(`A frase inclui a palavra Verde? ${incluiVerde}.` + `\nA frase inclui a palavra laranja? ${incluiLaranja}`)
    //EXTRA
    const fraseToUpperCase = fraseMudaPalavra.toUpperCase('mas não deixe o gato sair')
    console.log(fraseToUpperCase)
    console.log(fraseMudaPalavra.replaceAll('mas não deixe o gato sair','MAS NÃO DEIXE O GATO SAIR'))
}



fraseExercicio()
