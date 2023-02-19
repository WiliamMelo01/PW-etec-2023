import { Aluno } from "./models/Model.user";
const alunos: Aluno[] = [
  new Aluno("João", 17, 69.2, 1.7),
  new Aluno("Carlinhos", 16, 154.3, 1.65),
  new Aluno("Leonardo", 15, 8.2, 1.81),
  new Aluno("Ramildo", 14, 94.8, 1.68),
  new Aluno("Jucelino", 13, 54.7, 1.59),
  new Aluno("Felipe", 18, 77, 1.8),
  new Aluno("Bruno", 21, 83, 1.76),
  new Aluno("Amanda", 25, 70, 1.62),
  new Aluno("Patrícia", 28, 90, 1.7),
  new Aluno("Daniel", 30, 100, 1.7),
  new Aluno("Paulo", 35, 62, 1.65),
  new Aluno("Sandra", 40, 90, 1.6),
  new Aluno("Roberto", 45, 120, 1.8),
  new Aluno("Lucas", 50, 68, 1.65),
  new Aluno("Ana", 55, 85, 1.7),
  new Aluno("Julia", 58, 49, 1.74),
  new Aluno("Camila", 37, 65, 1.64),
  new Aluno("Cleber", 17, 97, 1.58),
  new Aluno("Jose", 26, 114, 1.90),
  new Aluno("Mariana", 27, 135.5, 1.67),
];

function mostraInformacoesDoAluno(aluno: Aluno) {
  aluno.getCategoria();
  const { IMC, nome, categoria } = aluno;
  console.log(
    `${nome} o seu IMC è : ${IMC.toFixed(2)} e sua categoria é: ${categoria}`
  );
}

function contarCategorias(alunos: Aluno[]) {
  const result = {
    baixoPeso: 0,
    pesoNormal: 0,
    Sobrepeso: 0,
    obesidadeClasseI: 0,
    obesidadeClasseII: 0,
    obesidadeClasseIII: 0,
  };
  alunos.forEach((aluno) => {
    switch (aluno.categoria) {
      case "Baixo peso":
        result.baixoPeso++;
        break;
      case "Peso normal":
        result.pesoNormal++;
        break;
      case "Sobrepeso":
        result.Sobrepeso++;
        break;
      case "Obesidade Classe I":
        result.obesidadeClasseI++;
        break;
      case "Obesidade Classe II":
        result.obesidadeClasseII++;
        break;
      case "Obesidade Classe III":
        result.obesidadeClasseIII++;
        break;
      default:
        break;
    }
  });
  console.table(result);
}

alunos.forEach((aluno) => {
  aluno.getImc();
  mostraInformacoesDoAluno(aluno);
});
contarCategorias(alunos);
