import { Aluno } from "./models/Model.user";

const aluno1 = new Aluno("João", 17, 69.2, 1.7);
const aluno2 = new Aluno("Carlinhos", 16, 54.3, 1.65);
const aluno3 = new Aluno("Leonardo", 15, 80.2, 1.81);
const aluno4 = new Aluno("Ramildo", 14, 60.8, 1.68);
const aluno5 = new Aluno("Jucelino", 13, 54.7, 1.59);

const list: Aluno[] = [aluno1, aluno2, aluno3, aluno4, aluno5];

function mostraInformacoesDoAluno(aluno: Aluno) {
  const { IMC, nome } = aluno;
  console.log(`${nome} o seu IMC è : ${IMC.toFixed(2)}`);
}

list.forEach((aluno) => {
  aluno.getImc();
  mostraInformacoesDoAluno(aluno);
});
