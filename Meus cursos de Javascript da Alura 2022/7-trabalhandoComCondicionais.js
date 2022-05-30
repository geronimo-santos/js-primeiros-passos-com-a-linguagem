console.log(`trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`,
    `Curitiba`,
);

const idadeComprador = 18;
const estaAcompanhada = true;
const passagemComprada = true;


// console.log(`Destinos possiveis:`)
// if (idadeComprador >= 18) {
//     console.log(`Comprador maior de idade`);
//     listaDeDestinos.splice(2, 1);//removendo um item
// } else if (estaAcompanhada) {
//     console.log(`Comprador está acompanhado`);
//     listaDeDestinos.splice(2, 1);
// } else (
//     console.log(`A pessoa é menor de idade e não está acompanhada`)
// )

// console.log(listaDeDestinos);

if(idadeComprador >= 18 && estaAcompanhada == true) {
    console.log(`Boa Viagem!!`);
    listaDeDestinos.splice(2, 1);//removendo um item
} else{
    console.log(`Comprador não é maior de idade não posso vender`);
} 

console.log("Embarque: /n/n");
if(idadeComprador >= 18 && passagemComprada){
    console.log(`Boa viagem!!`);
}else{
    console.log(`Não pode embarcar`)
}

console.log(listaDeDestinos);

