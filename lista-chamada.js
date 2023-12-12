const alunos = ["Joao", "Ana", "Caio", "Lara", "Majorie", "Leo"];

//splice vc deve mencionar a posição do elemento (1), e depois quantos elementos seraão excluidos
//nesse caso colocamos o "rodrigo", então ele tirou ana e caio e colocou rodrigo
alunos.splice(1, 2, "Rodrigo");

console.log (alunos);
