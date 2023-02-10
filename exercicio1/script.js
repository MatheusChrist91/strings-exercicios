const pedeNomeComida = (nome, comidaFavorita1, comidaFavorita2, comidaFavorita3) => {
console.log (`Estas são as comidas favoritas de ${nomeUser}: \n- ${comidaFavorita1User} \n- ${comidaFavorita2User} \n- ${comidaFavorita3User}`)
}

const nomeUser = prompt(`Qual é o seu nome?`)
const comidaFavorita1User = prompt(`Qual é a sua comida favorita?`)
const comidaFavorita2User = prompt(`Qual é a segunda comida favorita?`)
const comidaFavorita3User = prompt(`Qual é a terceira comida favorita?`)

pedeNomeComida(nomeUser, comidaFavorita1User, comidaFavorita2User, comidaFavorita3User)