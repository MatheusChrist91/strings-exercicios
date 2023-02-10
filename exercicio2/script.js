/*
const fraseExercicio = () => {
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringTrim = minhaString.trim()
const minhaStringLength = minhaString.length

// A
console.log(minhaStringTrim)

// B
console.log(minhaStringLength)
console.log(minhaString.trim().length)

// C
console.log(minhaStringTrim.replace('________','“sticioso”'))
}

fraseExercicio()   
*/

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
const minhaStringTrim = minhaString.trim()
const stringMinha = "Eu não sou cachorro não, pra viver tão ________ "


const retirarEspaco = (frase) => {
    
    console.log(minhaStringTrim)
    console.log(minhaString.length)
    console.log(minhaStringTrim.length)
    console.log(minhaStringTrim.replace('________','“sticioso”'))

    console.log(stringMinha)
    console.log(stringMinha.length)
    console.log(stringMinha.replace('________', '“sticioso”'))

}

retirarEspaco(minhaString,stringMinha)
