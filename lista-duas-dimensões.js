const alunos = ["Joao", "Juliana", "Ana", "Caio"];
const media = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, media];
//a [] no final da expressão busca 0 = alunos (posição) e [1] busca a posição dentro de alunos

console.log (`A aluna da posição 1 da lista de alunos é ${listaDeAlunosEMedias[0][1]}.
A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}
`);
