const notas = [7, 7, 8, 9];

//...notas copia exatament o array de cima, e o , 10 ascrecenta esse numero na nova array
const novaNotas = [...notas, 10];

novaNotas.push (10);

console.log (`As novas notas são ${novaNotas}`);
console.log (`As notas originais são ${notas}`);