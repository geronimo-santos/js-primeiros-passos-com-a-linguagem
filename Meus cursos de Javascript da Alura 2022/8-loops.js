console.log(`\ntrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`,
    `Curitiba`,
);
const idadeComprador = 18;
const estaAcompanhada = true;
const passagemComprada = false;
const destino = `Salvador`;

console.log("\n Destinos possíveis:");
const podeComprar = idadeComprador >= 18 && estaAcompanhada == true;
console.log(listaDeDestinos);


let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador++;
}
console.log(`Destino existe: `, destinoExiste);


if (podeComprar && destinoExiste) {
    console.log(`Boa Viagem`);
} else {
    console.log(`Desculpe tivemos um erro!`);
}

for(let cont = 0; cont < 3; cont++){
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
    }
}
