console.log(`trabalhando com listas`);

const listaDeDestinos = new Array(
`São Paulo`,
`Rio de Janeiro`,
`Salvador`,
);

listaDeDestinos.push(`curitiba`);

listaDeDestinos.splice(2, 1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[2], listaDeDestinos[1]);